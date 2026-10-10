const express = require('express');
const router = express.Router();
const authController = require('./authController');

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/verify-key', authController.verifyKey);
router.post('/forgot', authController.resetCode);

module.exports = router;
