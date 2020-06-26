const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const {
	Schema
} = mongoose;
const UserSchema = new Schema({
	username: {
		type: String,
		required: 'Username is required'
	},
	password: {
		type: String,
		required: 'Password is required'
	},
	userType: {
		type: String,
		enum: ['Customer', 'Business', 'SuperUser'],
		default: "Customer",
	}
}, {
	timestamps: true
});

UserSchema.pre("save", function (next) {
	const user = this;
	if (!user.isModified('password')) next();

	bcrypt.hash(user.password, 12, function (error, hashedPassword) {
		if (error) throw new Error('The password couldnot be hashed');
		user.password = hashedPassword;
		next();
	});
});

module.exports = mongoose.model('User', UserSchema);