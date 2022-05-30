const express = require('express');
const loginRequired = require('../middlewares/loginRequired');
const ownerOnly = require('../middlewares/ownerOnly');
const controller = require('../controllers/product.controllers');
const uploadFile = require('../middlewares/upload');
const { productUpload, imageUpload } = require('../utils/upload');

const router = express.Router();

router.post('/add', loginRequired, controller.add);
router.post('/edit/:id', loginRequired, ownerOnly, controller.edit);
router.get('/get/:url', controller.get);
router.post('/shop/:id', controller.shop);
router.get('/owner-get/:id', loginRequired, ownerOnly, controller.ownerGet);
router.get('/purchases', loginRequired, controller.purchases);
router.post('/upload-image', loginRequired, uploadFile(imageUpload.single('file')), controller.upload);
router.post('/upload-file', loginRequired, uploadFile(productUpload.single('file')), controller.upload);
router.get('/search', controller.search);
router.get('/dashboard-data', loginRequired, controller.dashboardData);
router.get('/chart', loginRequired, controller.salesChart);
router.post('/buy/:id', controller.buy);
router.get('/download', controller.download);

module.exports = router;
