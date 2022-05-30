const express = require('express');
const controller = require('../controllers/profile.controllers');
const loginRequired = require('../middlewares/loginRequired');
const uploadFile = require('../middlewares/upload');

const { imageUpload } = require('../utils/upload');

const router = express.Router();

router.get('/', loginRequired, controller.profile);
router.post('/', loginRequired, controller.updateProfile);
router.post('/change-password', loginRequired, controller.changePassword);
router.post('/profile-pic', loginRequired, uploadFile(imageUpload.single('file')), controller.updateProfilePic);

module.exports = router;
