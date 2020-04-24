const router = require('express').Router();
const NotFoundError = require('../utils/errors/NotFoundError');

router.all('*', (req, res, next) => {
	next(new NotFoundError('Запрашиваемый ресурс не найден'));
});

module.exports = router;
