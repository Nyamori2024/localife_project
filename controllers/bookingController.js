const Booking = require('../models/Booking');

exports.createBooking = async (req, res) => {
  try {
    const { productId, reservationDate } = req.body;
    const booking = await Booking.create({
      userId: req.user.id,
      productId,
      reservationDate,
    });
    res.status(201).json({ message: 'Booking successful', booking });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
