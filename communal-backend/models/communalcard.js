const mongoose = require('mongoose');

const communalcardSchema = new mongoose.Schema({
  electricity: {
    type: Number,
    required: true,
  },
  gas: {
    type: Number,
    required: true,
  },
  hotwater: {
    type: Number,
    required: true,
  },
  coldwater: {
    type: Number,
    required: true,
  },
  caprepair: {
    type: Number,
    required: true,
  },
  sum: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('communalcard', communalcardSchema);
