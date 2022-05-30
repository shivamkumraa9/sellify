const express = require('express');
const loginRequired = require('../middlewares/loginRequired');
const controller = require('../controllers/payments.controllers');

const router = express.Router();

router.post('/subscribe', loginRequired, controller.subscribe);
router.post('/toogle-subscription', loginRequired, controller.toogleSubscription);
router.post('/change-plan', loginRequired, controller.changePlan);
router.post('/webhook', controller.webhook);
router.get('/withdraw', loginRequired, controller.getWithdrawalRequests);
router.post('/withdraw', loginRequired, controller.withdrawalRequest);
router.get('/user-details', loginRequired, controller.userPaymentDetails);

module.exports = router;
