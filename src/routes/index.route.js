const controller = require('../controllers/index.controller');
const express = require('express');
const router = express.Router();

router.get('/', controller.get);

module.exports = router;