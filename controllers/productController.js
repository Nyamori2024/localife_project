const Product = require('../models/Product');

// Add a new product
exports.addProduct = async (req, res) => {
  try {
    // Create a new product in the database with the data from the request body
    const product = await Product.create(req.body);
    
    // Send a success response with the created product
    res.status(201).json(product);
  } catch (error) {
    // Handle any errors that occur during the product creation process
    res.status(400).json({ error: error.message });
  }
};

// Get all products
exports.getProducts = async (req, res) => {
  try {
    // Retrieve all products from the database
    const products = await Product.find();
    
    // Send a success response with the retrieved products
    res.status(200).json(products);
  } catch (error) {
    // Handle any errors that occur during the product retrieval process
    res.status(500).json({ error: error.message });
  }
};