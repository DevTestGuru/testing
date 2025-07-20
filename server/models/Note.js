// const mongoose = require('mongoose');

// const NoteSchema = new mongoose.Schema({
//   text: { type: String, required: true },
//   userId: { type: mongoose.Schema.Types.ObjectId, required: true },
//   userName: { type: String },
//   offerId: { type: mongoose.Schema.Types.ObjectId },
//   transactionId: { type: mongoose.Schema.Types.ObjectId },
//   date: { type: Date, default: Date.now }
// });

// const Note = mongoose.model('Note', NoteSchema);

const { v4: uuidv4 } = require('uuid');

const inMemoryDB = {};

class Note {
  constructor({ text, userId, userName, offerId, transactionId }) {
    this.id = uuidv4();
    this.date = new Date();
    this.text = text;
    this.userId = userId;
    this.userName = userName;
    this.offerId = offerId;
    this.transactionId = transactionId;
    console.log('hello');
  }

  save() {
    inMemoryDB[this.id] = this;
    return this;
  }

  remove() {
    console.log('inside remove');
    try {
      delete inMemoryDB[this.id];
      console.log('removed');
      return true;
    } catch (err) {
      console.log('not removed');
      return false;
    }
  }

  static findById(id) {
    return inMemoryDB[id] ?? null;
  }

  static findAll() {
    return Object.values(inMemoryDB);
  }
}

module.exports = Note;
