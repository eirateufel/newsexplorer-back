const { Joi } = require('celebrate');

const loginObj = {
	body: Joi.object().keys({
		email: Joi.string().required().email(),
		password: Joi.string().required().min(5).max(30),
	}),
};

const createUserObj = {
	body: Joi.object().keys({
    email: Joi.string().required().email(),
		password: Joi.string().required().min(4).max(30),
		name: Joi.string().required().min(2).max(30),
	}),
};

const getUserObj = {
	body: Joi.object().keys({
		id: Joi.string().required().length(24),
	}),
};

module.exports = {
	loginObj, createUserObj, getUserObj,
};
