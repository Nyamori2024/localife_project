const Booking = require('../models/Booking');

// Create a new booking
exports.createBooking = async (req, res) => {
  try {
    const { productId, reservationDate } = req.body;
    
    // Create a new booking in the database with the provided product ID and reservation date
    // User ID is taken from the authenticated user (req.user.id)
    const booking = await Booking.create({
      userId: req.user.id,
      productId,
      reservationDate,
    });
    
    // Send a success response with the created booking
    res.status(201).json({ message: 'Booking successful', booking });
  } catch (error) {
    // Handle any errors that occur during the booking creation process
    res.status(500).json({ error: error.message });
  }
};