const mongoose = require('mongoose');

const {
    Schema,
    Types
} = mongoose;
const OrderSchema = new Schema({
    userId: {
        type: Types.ObjectId,
        ref: 'User'
    },
    productId: {
        type: Types.ObjectId,
        ref: 'Product'
    },
    orderId: {
        type: Number

    },
    orderQuantity: {
        type: Number,
        required: 'Please specify order quantity'
    },
    shippingAddress: {
        type: String,
        required: 'A valid shipping Address is required'
    }

}, {
    timestamps: true
});

module.exports = mongoose.model('Order', OrderSchema);