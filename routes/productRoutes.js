const express = require('express');
const { addProduct, getProducts } = require('../controllers/productController');
const { authenticate } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/add', authenticate, addProduct);
router.get('/list', getProducts);

module.exports = router;
