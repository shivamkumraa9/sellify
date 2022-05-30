const mongoose = require('mongoose');

const Product = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  owner: {
    type: mongoose.ObjectId,
    ref: 'User',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  priceStrategy: {
    type: String,
    required: true,
    enum: ['fixed', 'variable', 'free'],
  },
  price: {
    type: Number,
    min: 1,
  },
  minPrice: {
    type: Number,
    min: 1,
  },
  description: {
    type: String,
    required: true,
  },
  file: {
    type: String,
    required: true,
  },
  cover: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
    unique: true,
  },
  showSales: {
    type: Boolean,
    default: false,
  },
  hide: {
    type: Boolean,
    default: false,
  },
  allowNewSales: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model('Product', Product);
