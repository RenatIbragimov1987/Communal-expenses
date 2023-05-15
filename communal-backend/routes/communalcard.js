const express = require('express');

// const { validateMovie } = require('../validator/validator');

const communalcard = express.Router();
const { getAllCards, patchCard, postCard } = require('../controllers/communalcard');

communalcard.get('/communalcard', getAllCards);
communalcard.patch('/communalcard/:_id/dataId', patchCard);
communalcard.post('/communalcard', postCard);
module.exports = communalcard;
