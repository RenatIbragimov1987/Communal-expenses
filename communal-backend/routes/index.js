const router = require('express').Router();
const { getAllCards, patchCard, postCard } = require('../controllers/communalcard');
// const { validateSignin, validateSignup } = require('../validator/validator');
// const isAuth = require('../middlewares/auth');
// const { communalcard } = require('./communalcard');

router.get('/communalcard', getAllCards);
router.patch('/communalcard/:_id/dataId', patchCard);
router.post('/communalcard', postCard);
// защищаем роуты все что снизу

// router.use('/', communalcard);

module.exports = router;
