const mongoose = require('mongoose');

const Plan = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  stripePriceId: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  SaleCommission: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Plan', Plan);
