const BadRequestError = require('../errors/BadRequestError');
const Communalcard = require('../models/communalcard');

const getCard = async (req, res, next) => {
  try {
    const communalcard = await Communalcard.find({ owner: req.user.id }).exec();
    res.status(200).send(communalcard);
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
      sum,
    } = req.body;
    const card = new Communalcard({
      electricity,
      gas,
      hotwater,
      coldwater,
      caprepair,
      sum,
    });
    await card.save();
    // await mcardovie.populate('owner');
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
  getCard,
  postCard,
};
