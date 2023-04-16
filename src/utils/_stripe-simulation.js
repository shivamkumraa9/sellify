/* eslint-disable no-console */
const stripe = require('stripe')('');
const mongoose = require('mongoose');
const User = require('../models/User');
const Transaction = require('../models/Transaction');

require('dotenv').config();

async function main() {
  await mongoose.connect(process.env.DB_URI);
  console.log('db connected');

  const now = Date.now();
  const nowSecs = Math.floor(now / 1000);

  const testClock = await stripe.testHelpers.testClocks.create({
    frozen_time: nowSecs,
    name: 'Annual renewal',
  });

  console.log('Clock created');

  const customer = await stripe.customers.create({
    email: 'shivamkumraa99@gmail.com',
    test_clock: testClock.id,
    payment_method: 'pm_card_visa',
    invoice_settings: { default_payment_method: 'pm_card_visa' },
  });

  const user = User.findOne({ email: 'shivamkumraa99@gmail.com' });
  if (user) {
    await User.findOneAndDelete({ email: 'shivamkumraa99@gmail.com' });
    await Transaction.deleteMany({ user: user._id });
  }

  await User.create({
    email: 'shivamkumraa99@gmail.com',
    password: 'testing123',
    stripeCustomerId: customer.id,
  });

  console.log('Customer created and card attached');

  await stripe.subscriptions.create({
    customer: customer.id,
    items: [{ price: 'price_1L0JUEAkCUXrZtDnylr7pTPE' }],
  });

  const paymentMethod = await stripe.paymentMethods.attach(
    'pm_card_chargeCustomerFail',
    { customer: customer.id },
  );

  console.log('Customer subscribed');
  await stripe.customers.update(
    customer.id,
    {
      // payment_method: 'pm_card_chargeCustomerFail',
      invoice_settings: {
        default_payment_method: paymentMethod.id,
      },
    },
  );

  console.log('Update the card');

  await stripe.testHelpers.testClocks.advance(
    testClock.id,
    { frozen_time: Math.floor((Date.now() + (1000 * 60 * 60 * 24 * 45)) / 1000) },
  );
  console.log('Forward to 45 days');
}

main();
