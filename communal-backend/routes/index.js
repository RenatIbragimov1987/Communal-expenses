const router = require('express').Router();
const { postCard, getAllCards } = require('../controllers/communalcard');
// const { validateSignin, validateSignup } = require('../validator/validator');
// const isAuth = require('../middlewares/auth');
// const { communalcard } = require('./communalcard');

router.post('/communalcard', postCard);
router.get('/communalcard', getAllCards);
// защищаем роуты все что снизу

// router.use('/', communalcard);

module.exports = router;
