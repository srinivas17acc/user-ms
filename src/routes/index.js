const express = require('express');
const authController = require('./auth/auth.controller');
const verify = require('../config/verifyToken')
const documentController = require('../RestGate/document.controller');
const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/profile', verify, authController.profile);
router.post('/document', verify, documentController.createDocument);
router.post('/folder', verify, documentController.createFolder);
router.get('/folderread', verify, documentController.readFolder);
router.post('/movefolder', verify, documentController.moveFolder);

module.exports = router;