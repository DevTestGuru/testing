const express = require('express');
const router = express.Router();
const { errorHandler } = require('../../middleware/errorHandler');
const Note = require('../../models/Note');
const checkObjectId = require('../../middleware/checkObjectId');
const { check, validationResult } = require('express-validator');

// @route    POST api/notes
// @desc     Create a Note
// @access   Private
router.post('/', (req, res) => {
  try {
    const newNote = new Note({
      text: req.body.text,
      userId: req.body.userId,
      userName: req.body.userName,
      offerId: req.body.offerId,
      transactionId: req.body.transactionId
    });

    const note = newNote.save();

    console.log(note);

    return res.json(note.id);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send(err);
  }
});

// @route    GET api/notes
// @desc     Get all notes
// @access   Private
router.get('/', (req, res) => {
  try {
    const notes = Note.findAll();
    return res.json(notes);
  } catch (err) {
    return res.status(500).send(err);
  }
});
router.get('/:id', (req, res) => {
  try {
    const note = Note.findById(req.params.id);
    if (!note) return res.status(404).send('Note Not Found');
    return res.json(note);
  } catch (err) {
    return res.status(500).send(err);
  }
});

// // @route    DELETE api/notes/:id
// // @desc     Delete a note
// // @access   Private
router.delete('/:id', (req, res) => {
  console.log('in app delete');
  try {
    const note = Note.findById(req.params.id);

    if (!note) return res.status(404).send('Note Not Found');
    if (!note.remove()) return res.status(500).send('remove failed');

    return res.send('Note is removed');
  } catch (err) {
    return res.status(500).send(err);
  }
});

// // @route    PUT api/notes/:id
// // @desc     Update a note
// // @access   Private
router.put('/:id', (req, res) => {
  try {
    const note = Note.findById(req.params.id);

    if (!note) return res.status(404).send('Note Not Found');
    const data = req.body;

    if (data.text !== undefined) note.text = data.text;
    if (data.userId !== undefined) note.userId = data.userId;
    if (data.userName !== undefined) note.userName = data.userName;
    if (data.offerId !== undefined) note.offerId = data.offerId;
    if (data.transactionId !== undefined)
      note.transactionId = data.transactionId;

    note.save();
    return res.json(note);
  } catch (err) {
    return res.status(500).send(err);
  }
});

module.exports = router;
