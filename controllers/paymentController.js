const stripe = require('stripe')(process.env.STRIPE_SECRET);
const Payment = require('../models/Payment');

exports.processPayment = async (req, res) => {
  try {
    const { amount, currency } = req.body;
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100,
      currency,
      payment_method_types: ['card'],
    });

    const payment = await Payment.create({
      userId: req.user.id,
      amount,
      currency,
      paymentStatus: 'Completed',
    });

    res.status(200).json({ message: 'Payment successful', payment, clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
