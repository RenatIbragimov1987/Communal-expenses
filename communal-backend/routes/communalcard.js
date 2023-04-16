const express = require('express');

const { validateMovie } = require('../validator/validator');

const communalcard = express.Router();
const {
  getCommunalcard,
  postCommunalcard,
} = require('../controllers/communalcard');

communalcard.get('/communalcard', getCommunalcard);
communalcard.post('/communalcard', validateMovie, postCommunalcard);

module.exports = { communalcard };
