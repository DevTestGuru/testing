const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  tags: [{
    type: String
  }],
  category: {
    type: String,
    enum: ['trading', 'research', 'portfolio', 'transaction', 'strategy'],
    default: 'research'
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('note', NoteSchema);