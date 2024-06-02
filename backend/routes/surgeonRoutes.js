const express = require('express');
const surgeonController = require('../controllers/surgeonController');
const router = express.Router();

router.get('/', surgeonController.getSurgeons);

module.exports = router;