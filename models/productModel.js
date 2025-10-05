// In models/productModel.js
const mongoose = require('mongoose');

const VariantSchema = new mongoose.Schema({ /* ... schema code ... */ });
const ProductSchema = new mongoose.Schema({ /* ... schema code ... */ });

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;