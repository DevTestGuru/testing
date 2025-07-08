const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const Note = require('../../models/Note');

// In-memory notes store
const notes = [];

// @route    POST api/notes
// @desc     Create a new note
// @access   Public
router.post('/', async(req, res) => {
  const { title, content } = req.body;
  if (!title || !content) return res.status(400).json({ msg: 'Title and content required' });

  const note = new Note({
    id: uuidv4(),
    title,
    content,
  });

  notes.push(note);
  res.status(201).json(note);
});

// @route    GET api/notes
// @desc     Get all notes
// @access   Public
router.get('/', (req, res) => {
  res.json(notes);
});

// @route    GET api/notes/:id
// @desc     Get a note by ID
// @access   Public
router.get('/:id', (req, res) => {
  const note = notes.find(n => n.id === req.params.id);
  if (!note) return res.status(404).json({ msg: 'Note not found' });
  res.json(note);
});

// @route    PUT api/notes/:id
// @desc     Update a note by ID
// @access   Public
router.put('/:id', (req, res) => {
  const note = notes.find(n => n.id === req.params.id);
  if (!note) return res.status(404).json({ msg: 'Note not found' });

  const { title, content } = req.body;
  if (title) note.title = title;
  if (content) note.content = content;
  note.updatedAt = new Date();

  res.json(note);
});

// @route    DELETE api/notes/:id
// @desc     Delete a note by ID
// @access   Public
router.delete('/:id', (req, res) => {
  const index = notes.findIndex(n => n.id === req.params.id);
  if (index === -1) return res.status(404).json({ msg: 'Note not found' });

  notes.splice(index, 1);
  res.json({ msg: 'Note deleted' });
});

module.exports = router;
