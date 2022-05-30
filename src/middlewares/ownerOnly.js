const joi = require('joi');
const Product = require('../models/Product');

module.exports = async (req, res, next) => {
  const objError = joi.string().hex().length(24).validate(req.params.id);
  if (objError.error) return res.status(400).json({ error: 'Invalid Id' });

  const product = await Product.findById(req.params.id);
  if (!product || !req.user._id.equals(product.owner)) return res.status(404).json({ error: 'Not found' });
  req.product = product;
  return next();
};
