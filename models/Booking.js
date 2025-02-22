const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  reservationDate: Date,
  status: { type: String, default: 'Pending' },
});

module.exports = mongoose.model('Booking', BookingSchema);
