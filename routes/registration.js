const router = require('express').Router();
const { celebrate } = require('celebrate');
const createUserObj = require('../celebrate-objects/createUserObj');
const { createUser } = require('../controllers/users');

router.post('/', celebrate(createUserObj), createUser);

module.exports = router;
