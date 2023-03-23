const mongoose = require('mongoose');

const ProductScheuma = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "title required"],
        minlength: [3, "must be at least 3 characters"]
    },
    price: {
        type: Number,
        required: [true, "price required"]
    },
    description: {
        type: String,
        required: [true, "description required"],
        minlength: [10, "must be at least 10 characters"]
    }
}, { timestamps: true });

const Product = mongoose.model('Product', ProductScheuma);

module.exports = Product;