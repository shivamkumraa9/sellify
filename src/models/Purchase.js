const mongoose = require('mongoose');

const Purchase = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  product: {
    type: mongoose.ObjectId,
    ref: 'Product',
    required: true,
  },
  stripeId: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['success', 'failed'],
    required: true,
  },
  customerEmail: {
    type: String,
    required: true,
  },
  customerName: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Purchase', Purchase);
