const router = require('express').Router();
const { errors } = require('celebrate');
const users = require('./users');
const articles = require('./articles');
const registration = require('./registration');
const authorization = require('./authorization');
const unexistedRoute = require('./unexistedRoute');
const errorHandler = require('../middlewares/errorHandler');
const crashTest = require('./crashTest');
const { requestLogger, errorLogger } = require('../middlewares/logger');

router.use(requestLogger);

router.use('/signup', registration);
router.use('/signin', authorization);
router.use('/users', users);
router.use('/articles', articles);
router.use('/crash-test', crashTest);

router.use('*', unexistedRoute);

router.use(errorLogger);
router.use(errors());
router.use(errorHandler);

module.exports = router;
