const router = require('express').Router();
const helmet = require('./helmet');
const rateLimit = require('./expressRateLimiter');

router.use(helmet);
router.use(rateLimit);

module.exports = router;
