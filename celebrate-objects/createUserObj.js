const { Joi } = require('celebrate');

const createUserObj = {
	body: Joi.object().keys({
		name: Joi.string().required().min(2).max(30),
		email: Joi.string().required().email(),
		password: Joi.string().required().min(8),
	}),
};

module.exports = createUserObj;
