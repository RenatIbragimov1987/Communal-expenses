const BadRequestError = require('../errors/BadRequestError');
const Communalcard = require('../models/communalcard');

const getAllCards = async (req, res, next) => {
  try {
    const communalcards = await Communalcard.find({});
    res.status(200).send(communalcards);
  } catch (err) {
    next(err);
  }
};

const postCard = async (req, res, next) => {
  try {
    const {
      electricity,
      gas,
      hotwater,
      coldwater,
      caprepair,
      heating,
      sum,
    } = req.body;
    const card = new Communalcard({
      electricity,
      gas,
      hotwater,
      coldwater,
      caprepair,
      heating,
      sum,
    });
    await card.save();
    res.status(201).send(card);
  } catch (err) {
    if (err.name === 'ValidationError') {
      next(new BadRequestError('Произошла ошибка. Поля должны быть заполнены'));
      return;
    }
    next(err);
  }
};

module.exports = {
  getAllCards,
  postCard,
};
