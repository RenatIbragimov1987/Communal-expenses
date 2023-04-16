const router = require('express').Router();
const { postCard } = require('../controllers/communalcard');
// const { validateSignin, validateSignup } = require('../validator/validator');
// const isAuth = require('../middlewares/auth');
const { communalcard } = require('./communalcard');

router.post('/communalcard', postCard);

// защищаем роуты все что снизу

router.use('/', communalcard);

module.exports = router;
