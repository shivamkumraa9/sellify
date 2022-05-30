const joi = require('joi');
const jwt = require('jsonwebtoken');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Plan = require('../models/Plan');
const Transaction = require('../models/Transaction');
const User = require('../models/User');
const Withdrawal = require('../models/Withdrawal');
const Product = require('../models/Product');
const Purchase = require('../models/Purchase');
const sendMail = require('../utils/send-mail');

// eslint-disable-next-line consistent-return
async function webhookManager(subscription, shouldUpdate = true, transactionStatus = '', amount = 0) {
  const user = await User.findOne({ stripeCustomerId: subscription.customer });
  if (!user) return null;

  const plan = await Plan.findOne({ stripePriceId: subscription.plan.id });
  if (shouldUpdate) {
    await User.findByIdAndUpdate(user._id, {
      stripeSubscriptionId: subscription.id,
      StripeNextDate: Math.floor(subscription.current_period_end * 1000),
      subscriptionStatus: subscription.status,
      isCancelled: subscription.cancel_at_period_end,
      plan: plan._id,
    });
  }

  if (transactionStatus) {
    await Transaction.create({
      user: user._id,
      plan: plan.name,
      status: transactionStatus,
      amount: amount / 100,
    });
  }
}

async function getLockedBalance(user) {
  const aggregate = await Withdrawal.aggregate([
    { $match: { user: user._id, status: { $in: ['initiated', 'processing'] } } },
    { $group: { _id: null, sum: { $sum: '$amount' } } },
  ]);
  return aggregate.length > 0 ? aggregate[0].sum : 0;
}

module.exports = {
  async subscribe(req, res) {
    const schema = joi.object({
      plan: joi.string().required(),
    });

    const { error, value } = schema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });
    if (req.user.stripeSubscriptionId) return res.status(400).json({ error: 'Invalid Req' });

    const plan = await Plan.findOne({
      name: value.plan,
    });

    if (!plan || !plan.price) return res.status(400).json({ error: 'Invalid Plan' });
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: plan.stripePriceId,
          quantity: 1,
        },
      ],
      customer: req.user.stripeCustomerId,
      mode: 'subscription',
      success_url: `${process.env.FRONTEND_URL}dashboard/plans`,
      cancel_url: 'https://google.com',
    });

    return res.json({ url: session.url });
  },

  async toogleSubscription(req, res) {
    if (!req.user.stripeSubscriptionId) return res.status(400).json({ error: 'Invalid Req' });

    const newValue = !req.user.isCancelled;
    await stripe.subscriptions.update(
      req.user.stripeSubscriptionId,
      { cancel_at_period_end: newValue },
    );

    return res.json({ url: 'success' });
  },

  async changePlan(req, res) {
    const schema = joi.object({
      plan: joi.string().required(),
    });

    const { error, value } = schema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });
    if (!req.user.stripeSubscriptionId) return res.status(400).json({ error: 'Invalid Req' });

    const plan = await Plan.findOne({
      name: value.plan,
    });
    if (!plan || !plan.price || req.user.plan.equals(plan._id)) return res.status(400).json({ error: 'Invalid Plan' });

    const subscription = await stripe.subscriptions.retrieve(req.user.stripeSubscriptionId);
    await stripe.subscriptions.update(subscription.id, {
      cancel_at_period_end: false,
      proration_behavior: 'always_invoice',
      items: [{
        id: subscription.items.data[0].id,
        price: plan.stripePriceId,
      }],
    });

    return res.json({ msg: 'success' });
  },

  async webhook(req, res) {
    // stripe listen --forward-to localhost:5000/payments/webhook
    const payload = req.rawBody;
    const sig = req.headers['stripe-signature'];

    let event;
    try {
      event = stripe.webhooks.constructEvent(payload, sig, process.env.WEBHOOK_SECRET);
    } catch (err) {
      return res.status(400).json({ msg: `Webhook Error: ${err.message}` });
    }

    // eslint-disable-next-line no-console
    console.log(event.type);
    const session = event.data.object;

    if (event.type === 'invoice.payment_succeeded') {
      if (session.subscription) {
        const subscription = await stripe.subscriptions.retrieve(session.subscription);
        await webhookManager(subscription, true, 'success', session.total);
      }
    } else if (event.type === 'invoice.payment_failed') {
      if (session.subscription) {
        const subscription = await stripe.subscriptions.retrieve(session.subscription);
        await webhookManager(subscription, false, 'failed', session.total);
      }
    } else if (event.type === 'customer.subscription.deleted') {
      const user = await User.findOne({ stripeCustomerId: session.customer });
      const freePlan = await Plan.findOne({ name: 'Free' });

      await User.findByIdAndUpdate(user._id, {
        stripeSubscriptionId: '',
        subscriptionStatus: '',
        isCancelled: false,
        plan: freePlan._id,
      });
    } else if (event.type === 'customer.subscription.updated') {
      await webhookManager(session);
    } else if (event.type === 'checkout.session.completed') {
      if (session.payment_status === 'paid') {
        try {
          const token = session.success_url.split(process.env.DOWNLOAD_URL);
          const id = jwt.verify(token[1], process.env.JWT_DOWNLOAD_SECRET);

          const product = await Product.findById(id._id)
            .populate('owner');
          const plan = await Plan.findById(product.owner.plan);

          const amount = (session.amount_total / 100) * ((100 - plan.SaleCommission) / 100);

          await Purchase.create({
            product: product._id,
            stripeId: session.id,
            status: 'success',
            customerEmail: session.customer_details.email,
            customerName: session.customer_details.name,
            amount: amount.toFixed(2),
          });

          await User.findByIdAndUpdate(product.owner._id, {
            $inc: { balance: amount.toFixed(2) },
          });

          const subject = 'Purchase Success';
          const body = `Your purchase of ${session.currency}${session.amount_total / 100} for ${product.name} was successful. here is download link: ${session.success_url} (valid for 7 days)`;
          sendMail(session.customer_details.email, subject, body);
        // eslint-disable-next-line no-empty
        } catch {}
      }
    }

    return res.json({ msg: 'success' });
  },

  async getWithdrawalRequests(req, res) {
    return res.json({
      withdrawals: await Withdrawal.find({ user: req.user }).sort({ createdAt: -1 }),
      balance: req.user.balance - await getLockedBalance(req.user),
    });
  },

  async withdrawalRequest(req, res) {
    const schema = joi.object({
      amount: joi.number().integer().min(10).required(),
      paypalEmail: joi.string().email().required(),
    });

    const { error, value } = schema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const bal = await getLockedBalance(req.user);
    if (value.amount > req.user.balance - bal) return res.status(400).json({ error: 'Not enough balance' });

    const withdrawal = await Withdrawal.create({
      user: req.user,
      status: 'initiated',
      amount: value.amount,
      paypalEmail: value.paypalEmail,
    });

    return res.json(withdrawal);
  },

  async userPaymentDetails(req, res) {
    const {
      plan, subscriptionStatus, StripeNextDate, isCancelled,
    } = req.user;

    return res.json({
      userDetails: {
        plan, subscriptionStatus, StripeNextDate, isCancelled,
      },
      plans: await Plan.find({}, { stripePriceId: 0 }),
      transctions: await Transaction.find({ user: req.user._id }).sort({ createdAt: -1 }),
    });
  },
};
