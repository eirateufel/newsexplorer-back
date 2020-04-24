const router = require('express').Router();
const { celebrate } = require('celebrate');
const { login } = require('../controllers/login');
const loginObj = require('../celebrate-objects/loginObj');

router.post('/', celebrate(loginObj), login);

module.exports = router;
