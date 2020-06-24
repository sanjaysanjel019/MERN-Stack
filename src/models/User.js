const mongoose = require('mongoose');
const {
    Schema
} = mongoose;
const UserSchema = new Schema({
    username: {
        type: String,
        required: "Username is required"
    },
    password: {
        type: String,
        required: "Password is required"
    },
}, {
    timestamps: true
});

module.exports = mongoose.model("User", UserSchema);