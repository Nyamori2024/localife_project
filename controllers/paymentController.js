const stripe = require('stripe')(process.env.STRIPE_SECRET);
const Payment = require('../models/Payment');

// Process a payment
exports.processPayment = async (req, res) => {
  try {
    const { amount, currency } = req.body;
    
    // Create a payment intent with Stripe
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Amount in cents
      currency,
      payment_method_types: ['card'],
    });

    // Save the payment details in the database
    const payment = await Payment.create({
      userId: req.user.id,
      amount,
      currency,
      paymentStatus: 'Completed',
    });

    // Send a success response with the payment details and client secret
    res.status(200).json({
      message: 'Payment successful',
      payment,
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    // Handle any errors that occur during the payment process
    res.status(500).json({ error: error.message });
  }
};