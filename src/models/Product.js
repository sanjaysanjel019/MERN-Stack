const mongoose = require('mongoose');
const {
    Schema,
    Types
} = mongoose;
const ProductSchema = new Schema({
    userId: {
        type: Types.ObjectId,
        ref: 'User'
    },
    name: {
        type: String,
        required: 'A valid product name is required'
    },
    category: {
        type: String,
        enum: ['Gaming', 'Grocery', 'Sports'],

    },
    price: {
        type: Number,
        required: 'Price of the product is required'
    }

}, {
    timestamps: true
});

module.exports = mongoose.model('Product', ProductSchema);