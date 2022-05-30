const mongoose = require('mongoose');

const Withdrawal = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.ObjectId,
    ref: 'User',
    required: true,
  },
  status: {
    type: String,
    enum: ['initiated', 'processing', 'success', 'failed', 'cancelled'],
    default: 'initiated',
  },
  amount: {
    type: Number,
    required: true,
    min: 0,
  },
  paypalEmail: {
    type: String,
    required: true,
  },
  completedAt: Date,
});

module.exports = mongoose.model('Withdrawal', Withdrawal);
