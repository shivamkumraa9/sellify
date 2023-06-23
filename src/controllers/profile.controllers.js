const joi = require('joi');
const bcrypt = require('bcryptjs');
const fileUploader = require('@uploadcare/upload-client');
const User = require('../models/User');

module.exports = {
  profile(req, res) {
    return res.json({
      email: req.user.email,
      firstName: req.user.firstName,
      lastName: req.user.lastName,
      description: req.user.description,
      profilePic: req.user.profilePic,
    });
  },

  async changePassword(req, res) {
    const schema = joi.object({
      oldPassword: joi.string().min(6).required(),
      password1: joi.string().min(6).required(),
      password2: joi.string().equal(joi.ref('password1')).required(),
    });

    const { error, value } = schema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    if (!(await bcrypt.compare(value.oldPassword, req.user.password))) {
      return res.status(400).json({ error: 'Old password is incorrect' });
    }

    const encryptedPassword = await bcrypt.hash(value.password1, 10);
    await User.findByIdAndUpdate(req.user._id, { password: encryptedPassword });
    return res.json({ msg: 'success' });
  },

  async updateProfile(req, res) {
    const schema = joi.object({
      email: joi.string().email().required(),
      firstName: joi.string().allow(''),
      lastName: joi.string().allow(''),
      description: joi.string().allow(''),
    });

    const { error, value } = schema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    try {
      await User.findByIdAndUpdate(req.user._id, value);
      return res.json({ msg: 'success' });
    } catch (err) {
      return res.status(400).json({ error: 'User with email already exists' });
    }
  },

  async updateProfilePic(req, res) {
    const file = await fileUploader.uploadFile(req.file.buffer, {
      publicKey: process.env.UPLOAD_CARE_PUBLIC_KEY,
    });
    await User.findByIdAndUpdate(req.user._id, {
      profilePic: file.cdnUrl,
    });
    return res.json({ path: file.cdnUrl });
  },
};
