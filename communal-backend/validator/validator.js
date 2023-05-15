const { celebrate, Joi } = require('celebrate');
// const isURL = require('validator/lib/isURL');

// const isValidLink = (value) => {
//   if (!isURL(value)) {
//     console.log('Некорректная ссылка');
//   }
//   return value;
// };
const validateSignup = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).required(),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(6),
  }),
});

const validateSignin = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(6),
  }),
});

const validateMovie = celebrate({
  body: Joi.object().keys({
    electricity: Joi.number().required(),
    gas: Joi.number().required(),
    hotwater: Joi.number().required(),
    coldwater: Joi.number().required(),
    caprepair: Joi.number().required(),
    heating: Joi.number().required(),
    sum: Joi.string().required(),
  }),
});

const validateDeleteMovie = celebrate({
  params: Joi.object().keys({
    _id: Joi.string().length(24).hex().required(),
  }),
});

const validateUserUpdate = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).required(),
    email: Joi.string().required().email(),
  }),
});

module.exports = {
  validateSignup,
  validateSignin,
  validateMovie,
  validateDeleteMovie,
  validateUserUpdate,
};
