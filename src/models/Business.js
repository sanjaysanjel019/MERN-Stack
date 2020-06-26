const mongoose = require('mongoose');
const {
    Schema,
    Types
} = mongoose;
const BusinessSchema = new Schema({
    userId: {
        type: Types.ObjectId,
        ref: 'User'
    },
    businessName: {
        type: String,
        required: 'Business Name is required'
    },
    address: {
        type: String,
        required: 'Business Address is required'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Business', BusinessSchema);