const Mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new Mongoose.Schema({
	email: {
		type: String,
		validate: {
			validator(link) {
				return validator.isEmail(link);
			},
		},
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
		minlength: 8,
		select: false,
	},
	name: {
		type: String,
		minlength: 2,
		maxlength: 30,
		required: true,
	},
});

userSchema.statics.findUserByCredentials = function (email, password) {
	return this.findOne({ email }).select('+password')
		.then((user) => {
			if (!user) {
				return Promise.reject(new Error('Неправильные почта или пароль'));
			}
			return bcrypt.compare(password, user.password)
				.then((matched) => {
					if (!matched) {
						return Promise.reject(new Error('Неправильные почта или пароль'));
					}
					return user;
				});
		});
};

module.exports = Mongoose.model('user', userSchema);
