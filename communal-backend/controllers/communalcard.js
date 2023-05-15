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

const patchCard = async (req, res, next) => {
  const cardById = req.params._id;
  try {
    const {
      electricity, gas, hotwater, coldwater, caprepair, heating, sum,
    } = req.body;
    const updatedCard = await Communalcard.findByIdAndUpdate(
      cardById,
      {
        electricity,
        gas,
        hotwater,
        coldwater,
        caprepair,
        heating,
        sum,
      },
      { new: true },
    );
    // const { ...result } = updatedCard.toObject(updatedCard);
    // console.log(updatedCard.toObject(updatedCard));
    await updatedCard.save(updatedCard);
    res.status(201).send();
  } catch (err) {
    if (err.name === 'ValidationError') {
      next(new BadRequestError('Произошла ошибка. Поля должны быть заполнены'));
      return;
    }
    next(err);
  }
};
const postCard = async (req, res, next) => {
  try {
    const {
      id, electricity, gas, hotwater, coldwater, caprepair, heating, sum,
    } = req.body;
    const updatedCard = await Communalcard.create(
      {
        id,
        electricity,
        gas,
        hotwater,
        coldwater,
        caprepair,
        heating,
        sum,
      },
    );
    res.status(201).send(updatedCard);
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
  patchCard,
  postCard,
};
