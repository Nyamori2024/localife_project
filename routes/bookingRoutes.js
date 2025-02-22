const express = require('express');
const { createBooking } = require('../controllers/bookingController');
const { authenticate } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/book', authenticate, createBooking);

module.exports = router;
