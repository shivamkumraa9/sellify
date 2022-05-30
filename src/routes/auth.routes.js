const express = require('express');

const router = express.Router();
const controller = require('../controllers/auth.controllers');

router.post('/register', controller.register);
router.post('/login', controller.login);
router.post('/request-password-reset', controller.requestResetPassword);
router.post('/password-reset', controller.resetPassword);

module.exports = router;
