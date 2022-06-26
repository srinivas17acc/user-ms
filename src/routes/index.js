const express = require('express');
const authController = require('./auth/auth.controller');
const verify = require('../config/verifyToken')
const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/profile', verify, authController.profile);


module.exports = router;