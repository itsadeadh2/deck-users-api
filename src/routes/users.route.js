const controller = require('../controllers/users.controller');
const express = require('express');
const router = express.Router();

router.post('/', controller.post);

module.exports = router;