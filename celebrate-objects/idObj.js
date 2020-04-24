const { Joi } = require('celebrate');

const idObj = {
	params: Joi.object().keys({
		id: Joi.string().required().length(24),
	}),
};

module.exports = idObj;
