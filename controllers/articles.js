const Article = require('../models/article');
const NotFoundError = require('../utils/errors/NotFoundError');
const AccessForbiddenError = require('../utils/errors/AccessForbiddenError');

module.exports.getArticles = (req, res, next) => {
	Article.find({ owner: req.user._id })
		.then((result) => {
			if (result.length === 0) {
				throw new NotFoundError('Вы не сохранили ни одной статьи');
			}
			res.status(200).send({ data: result });
		})
		.catch(next);
};

module.exports.createArticle = (req, res, next) => {
	const {
		keyword, title, text, date, source, link, image,
	} = req.body;
	const ownerId = req.user._id;

	Article.create({
		keyword, title, text, date, source, link, image, owner: ownerId,
	})
		.then(({ _doc }) => {
			const newArticle = _doc;
			delete newArticle.owner;

			res.status(201).send({ message: 'Статья сохранена', newArticle });
		})
		.catch(next);
};

module.exports.deleteArticle = (req, res, next) => {
	Article.findOne({ _id: req.params.id }).select('+owner')
		.then((result) => {
			if (!result) throw new NotFoundError('Такой статьи нет');

			if (JSON.stringify(req.user._id) === JSON.stringify(result.owner)) {
				Article.findByIdAndRemove(req.params.id)
					.then(() => res.status(200).send({ message: 'Статья успешно удалена' }));
			} else {
				throw new AccessForbiddenError('Ошибка доступа');
			}
		})
		.catch(next);
};
