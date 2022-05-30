const joi = require('joi');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const User = require('../models/User');
const sendMail = require('../utils/send-mail');
const Plan = require('../models/Plan');

module.exports = {
  async login(req, res) {
    const schema = joi.object({
      email: joi.string().email().required(),
      password: joi.string().min(6).required(),
    });

    const { error, value } = schema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const user = await User.findOne({ email: value.email });
    if (user && (await bcrypt.compare(value.password, user.password))) {
      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
      return res.json({ token });
    }
    return res.status(400).json({ error: 'Invalid Email/Password' });
  },

  async register(req, res) {
    const schema = joi.object({
      email: joi.string().email().required(),
      password: joi.string().min(6).required(),
    });

    const { error, value } = schema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const alreadyExists = await User.findOne({
      email: value.email,
    });
    if (alreadyExists) {
      return res.status(400).json({ error: 'User with email already exists' });
    }

    const customer = await stripe.customers.create({
      email: value.email,
    });
    const freePlan = await Plan.findOne({ name: 'Free' });
    const encryptedPassword = await bcrypt.hash(value.password, 10);
    await User.create({
      email: value.email,
      password: encryptedPassword,
      stripeCustomerId: customer.id,
      plan: freePlan._id,
    });
    return res.json({ msg: 'success' });
  },

  async requestResetPassword(req, res) {
    const schema = joi.object({
      email: joi.string().email().required(),
    });

    const { error, value } = schema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const exists = await User.findOne({ email: value.email });
    if (!exists) {
      return res.status(401).json({ error: 'User with this email not found' });
    }

    const token = jwt.sign({
      email: value.email,
    }, process.env.JWT_PASSWORD_SECRET, { expiresIn: 900 });
    const url = `${process.env.FRONTEND_URL}forgot-password/confirm`;

    const subject = 'Reset Password';
    const body = `Password reset url: ${url}?token=${token}`;
    sendMail(value.email, subject, body);

    return res.json({ msg: 'success' });
  },

  async resetPassword(req, res) {
    const schema = joi.object({
      token: joi.string().min(1).required(),
      password1: joi.string().min(6).required(),
      password2: joi.string().equal(joi.ref('password1')).required(),
    });

    const { error, value } = schema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    try {
      const email = jwt.verify(value.token, process.env.JWT_PASSWORD_SECRET);

      const user = await User.findOne({ email: email.email });
      if (!user) {
        return res.status(401).json({ error: 'User not found' });
      }

      const encryptedPassword = await bcrypt.hash(value.password1, 10);
      await User.findByIdAndUpdate(user._id, { password: encryptedPassword });

      return res.json({ msg: 'success' });
    } catch (err) {
      return res.status(401).json({ error: 'Token is either invalid or expired' });
    }
  },
};
