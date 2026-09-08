const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
    category: { type: String, required: true },
    stock: { type: Number, required: true },
    quantity: { type: Number, required: true },
    image: { type: Boolean, required: true },
    timestamp: { type: Date, default: Date.now }
});

    const productModel = mongoose.model('Product', productSchema);
module.exports = productModel