const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const NewProduct = new Schema({
    name_product: String,
    price_product: Number,
    type: String,
    quantity: Number
});

module.exports = mongoose.model('product',NewProduct)
