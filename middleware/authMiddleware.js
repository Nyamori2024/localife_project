const jwt = require('jsonwebtoken');
require('dotenv').config();

// Middleware to authenticate a user using JWT
exports.authenticate = (req, res, next) => {
  // Get the token from the Authorization header
  const token = req.header('Authorization')?.split(' ')[1];
  
  // If no token is provided, return an access denied error
  if (!token) {
    return res.status(401).json({ error: 'Access denied. No token provided.' });
  }

  try {
    // Verify the token and decode the payload
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Attach the decoded user information to the request object
    req.user = decoded;
    
    // Call the next middleware or route handler
    next();
  } catch (error) {
    // If the token is invalid, return an error
    res.status(400).json({ error: 'Invalid token.' });
  }
};