const mongoose = require('mongoose');

const User = new mongoose.Schema({
  firstName: {
    type: String,
    default: '',
  },
  lastName: {
    type: String,
    default: '',
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  profilePic: {
    type: String,
  },
  role: {
    type: String,
    default: 'User',
    enum: ['User', 'Admin'],
  },
  plan: {
    type: mongoose.ObjectId,
    ref: 'Plan',
    required: true,
  },
  balance: {
    type: Number,
    default: 0,
  },
  stripeCustomerId: {
    type: String,
    required: true,
  },
  stripeSubscriptionId: String,
  subscriptionStatus: String,
  StripeNextDate: Date,
  isCancelled: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('User', User);
