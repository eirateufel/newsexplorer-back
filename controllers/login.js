const jwt = require('jsonwebtoken');
const User = require('../models/user');
const secretKey = require('../utils/secretKey');
const NotAuthorizedError = require('../utils/errors/NotAuthorizedError');

module.exports.login = (req, res, next) => {
	const { email, password } = req.body;
	return User.findUserByCredentials(email, password)
		.then((user) => {
			const token = jwt.sign({ _id: user._id }, secretKey, { expiresIn: '7d' });

			res.cookie('jwt', token, {
				maxAge: 3600000 * 24 * 7,
				httpOnly: true,
				sameSite: true,
			});

			res.status(200).send({ token });
		})
		.catch(() => next(new NotAuthorizedError('Неверные почта или пароль')));
};
