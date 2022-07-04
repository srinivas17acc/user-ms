const express = require('express');
const authController = require('./auth/auth.controller');
const verify = require('../config/verifyToken')
const documentController = require('../RestGate/document.controller');
const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/profile', verify, authController.profile);
router.post('/document', verify, documentController.createDocument);



module.exports = router;