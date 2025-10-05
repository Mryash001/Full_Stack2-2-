const mongoose = require('mongoose');

const VariantSchema = new mongoose.Schema({
  color: String,
  size: String,
  stock: Number
});

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  variants: [VariantSchema]
});

module.exports = mongoose.model('Product', ProductSchema);