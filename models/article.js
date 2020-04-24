const Mongoose = require('mongoose');
const validator = require('validator');

const articleSchema = new Mongoose.Schema({
	keyword: {
		type: String,
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
	text: {
		type: String,
		required: true,
	},
	date: {
		type: String,
		required: true,
	},
	source: {
		type: String,
		required: true,
	},
	link: {
		type: String,
		validate: {
			validator(link) {
				return validator.isURL(link);
			},
		},
		required: true,
	},
	image: {
		type: String,
		validate: {
			validator(link) {
				return validator.isURL(link);
			},
		},
		required: true,
	},
	owner: {
		type: Mongoose.Schema.Types.ObjectId,
		ref: 'user',
		required: true,
		select: false,
	},
});

module.exports = Mongoose.model('article', articleSchema);
