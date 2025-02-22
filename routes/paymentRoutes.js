const express = require('express');
const { processPayment } = require('../controllers/paymentController');
const { authenticate } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/pay', authenticate, processPayment);

module.exports = router;
