const router = require('express').Router();
const { celebrate } = require('celebrate');
const { getArticles, createArticle, deleteArticle } = require('../controllers/articles');
const createArticleObj = require('../celebrate-objects/createArticle');
const idObj = require('../celebrate-objects/idObj');
const auth = require('../middlewares/auth');

router.get('/', auth, getArticles);
router.post('/', auth, celebrate(createArticleObj), createArticle);
router.delete('/:id', auth, celebrate(idObj), deleteArticle);

module.exports = router;
