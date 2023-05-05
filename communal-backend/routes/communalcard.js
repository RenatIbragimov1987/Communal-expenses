const express = require('express');

const { validateMovie } = require('../validator/validator');

const communalcard = express.Router();
const { getAllCards, postCard } = require('../controllers/communalcard');

communalcard.get('/communalcard', getAllCards);
communalcard.post('/communalcard', validateMovie, postCard);

module.exports = { communalcard };
