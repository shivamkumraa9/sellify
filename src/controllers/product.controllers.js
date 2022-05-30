const joi = require('joi');
const jwt = require('jsonwebtoken');
const sanitizeHtml = require('sanitize-html');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Product = require('../models/Product');
const Purchase = require('../models/Purchase');
const User = require('../models/User');

const productSchema = () => joi.object({
  name: joi.string().required(),
  price: joi.number().integer().min(1)
    .when('priceStrategy', { is: 'fixed', then: joi.required() }),
  minPrice: joi.number().integer().min(1)
    .when('priceStrategy', { is: 'variable', then: joi.required() }),
  priceStrategy: joi.string().valid('fixed', 'variable', 'free').required(),
  description: joi.string().required(),
  file: joi.string().required(),
  cover: joi.string().required(),
  url: joi.string().regex(/^[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*$/).required(),
  showSales: joi.boolean().required(),
  hide: joi.boolean().required(),
  allowNewSales: joi.boolean().required(),
});

module.exports = {
  async add(req, res) {
    const schema = productSchema();

    const { error, value } = schema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });
    value.description = sanitizeHtml(value.description);
    try {
      await Product.create({ owner: req.user._id, ...value });
      return res.json({ msg: 'success' });
    } catch (err) {
      return res.status(400).json({ error: 'url already exists' });
    }
  },

  async edit(req, res) {
    const schema = productSchema();

    const { error, value } = schema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });
    value.description = sanitizeHtml(value.description);
    try {
      await Product.findByIdAndUpdate(req.params.id, { ...value });
      return res.json({ msg: 'success' });
    } catch (err) {
      return res.status(400).json({ error: 'url already exists' });
    }
  },

  async get(req, res) {
    const objError = joi.string().regex(/^[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*$/)
      .validate(req.params.url);
    if (objError.error) return res.status(400).json({ error: 'Invalid url' });

    let product = await Product.findOne({ url: req.params.url }, { file: 0 })
      .populate({
        path: 'owner',
        select: 'firstName lastName profilePic _id',
      });
    if (!product || product.hide) return res.status(404).json({ error: 'Not found' });
    if (product.showSales) {
      product = product.toJSON();
      product.totalSales = await Purchase.count({
        product: product._id,
        status: 'success',
      });
    }
    return res.json(product);
  },

  async shop(req, res) {
    const objError = joi.string().hex().length(24).validate(req.params.id);
    if (objError.error) return res.status(400).json({ error: 'Invalid Id' });

    const user = await User.findById(
      req.params.id,
      // eslint-disable-next-line object-curly-newline
      { firstName: 1, lastName: 1, description: 1, profilePic: 1 },
    );

    if (!user) return res.status(400).json({ error: 'Invalid Id' });

    const products = await Product.find({
      owner: user._id,
      hide: false,
    }, { file: 0 });

    return res.json({ products, user });
  },

  async ownerGet(req, res) {
    return res.json(req.product);
  },

  async purchases(req, res) {
    const products = await Product.find({ owner: req.user._id }, { name: 1 });
    const productIds = products.map((product) => product._id);

    const purchases = await Purchase.find({
      product: { $in: productIds },
    }, { stripeId: 0 })
      .populate('product', 'name url')
      .sort({ createdAt: -1 });

    return res.json({ purchases, products });
  },

  async upload(req, res) {
    return res.json({ file: `${req.file.destination}${req.file.filename}` });
  },

  async search(req, res) {
    const obj = joi.string().validate(req.query.text);
    if (obj.error) return res.status(400).json({ error: 'Invalid text' });
    obj.value = obj.value || '';

    const products = await Product.find(
      { name: { $regex: obj.value } },
      // eslint-disable-next-line object-curly-newline
      { name: 1, price: 1, cover: 1, url: 1, minPrice: 1, priceStrategy: 1 },
    )
      .limit(10)
      .populate({
        path: 'owner',
        select: 'firstName lastName profilePic _id',
      });
    return res.json(products);
  },

  async dashboardData(req, res) {
    const results = await Product.find({ owner: req.user._id });
    const products = results.map((val) => val.toJSON());
    const productIds = products.map((product) => product._id);
    const match = { $match: { product: { $in: productIds }, status: 'success' } };

    const analytics = await Purchase.aggregate([
      match,
      {
        $group: {
          _id: null,
          revenue: { $sum: '$amount' },
          orders: { $sum: 1 },
          avgOrderValue: { $avg: '$amount' },
        },
      },
    ]);

    const transactions = await Purchase.find({
      product: { $in: productIds },
    }, { stripeId: 0 })
      .sort({ createdAt: -1 })
      .limit(7);

    const sales = await Purchase.aggregate([
      match,
      {
        $group: {
          _id: '$product',
          revenue: { $sum: '$amount' },
          orders: { $sum: 1 },
        },
      },
    ]);

    for (let i = 0; i < products.length; i += 1) {
      products[i].revenue = 0;
      products[i].orders = 0;
      for (let j = 0; j < sales.length; j += 1) {
        if (sales[j]._id.equals(products[i]._id)) {
          products[i].revenue = sales[j].revenue;
          products[i].orders = sales[j].orders;
        }
      }
    }

    return res.json({
      products, analytics: analytics[0], transactions,
    });
  },

  async salesChart(req, res) {
    const schema = joi.object({
      start: joi.number().integer().min(1640995200000).max(Date.now())
        .less(joi.ref('end'))
        .required(),
      end: joi.number().integer().min(1640995200000).max(Date.now())
        .required(),
    });

    const { error, value } = schema.validate(req.query);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const startDate = new Date(value.start);
    const endDate = new Date(value.end);
    startDate.setHours(0, 0, 0, 0);
    endDate.setHours(24, 0, 0, 0);
    startDate.setDate(startDate.getDate() + 1);

    const products = await Product.find({ owner: req.user._id });
    const productIds = products.map((product) => product._id);

    const chart = await Purchase.aggregate([
      {
        $match: {
          product: { $in: productIds },
          status: 'success',
          createdAt: {
            $gt: startDate,
            $lt: endDate,
          },
        },
      },
      {
        $group: {
          _id: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } },
          revenue: { $sum: '$amount' },
          orders: { $sum: 1 },
        },
      },
    ]);

    const dates = {};
    let count = 0;
    while (startDate <= endDate) {
      dates[startDate.toISOString().slice(0, 10)] = count;
      startDate.setDate(startDate.getDate() + 1);
      count += 1;
    }

    const revenues = Array(count).fill(0);
    const orders = Array(count).fill(0);

    for (let i = 0; i < chart.length; i += 1) {
      const item = chart[i];
      revenues[dates[item._id]] = item.revenue;
      orders[dates[item._id]] = item.orders;
    }

    return res.json({ dates: Object.keys(dates), revenues, orders });
  },

  async buy(req, res) {
    const objError = joi.string().hex().length(24).validate(req.params.id);
    if (objError.error) return res.status(400).json({ error: 'Invalid Id' });

    const product = await Product.findById(req.params.id);
    if (!product || product.hide || !product.allowNewSales) return res.status(404).json({ error: 'Not found' });

    let price;
    if (product.priceStrategy === 'variable') {
      price = joi.number().integer().min(product.minPrice).required()
        .validate(req.body.price);
      if (price.error) return res.status(400).json({ error: 'Invalid Price' });
      price = req.body.price;
    } else if (product.priceStrategy === 'fixed') {
      price = product.price;
    }

    const token = jwt.sign({ _id: product._id }, process.env.JWT_DOWNLOAD_SECRET, { expiresIn: '7d' });
    const url = `${process.env.DOWNLOAD_URL}${token}`;
    if (product.priceStrategy === 'free') return res.json({ url });
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: 'inr',
            product_data: {
              name: product.name,
            },
            unit_amount: price * 100,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: url,
      cancel_url: 'https://google.com',
    });

    return res.json({ url: session.url });
  },

  async download(req, res) {
    try {
      const id = jwt.verify(req.query.id, process.env.JWT_DOWNLOAD_SECRET);
      const product = await Product.findById(id._id);
      if (product) {
        return res.download(product.file);
      }
    // eslint-disable-next-line no-empty
    } catch {}

    return res.status(401).json({ error: 'Invalid Id' });
  },
};
