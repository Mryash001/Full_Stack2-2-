// In routes/productRoutes.js
const express = require('express');
const router = express.Router();
const {
  getAllProducts,
  getProductsByCategory,
  getProductsByVariantColor
} = require('../controllers/productController');

router.get('/', getAllProducts);
router.get('/category/:category', getProductsByCategory);
router.get('/by-color/:color', getProductsByVariantColor);

module.exports = router;