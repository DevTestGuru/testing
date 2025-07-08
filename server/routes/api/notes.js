const express = require('express');
const router = express.Router();

// In-memory notes store
let notes = [];
let nextId = 1;

// Create a new note
router.post('/', (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ msg: 'Title and content are required' });
  }
  const note = { id: nextId++, title, content };
  notes.push(note);
  res.status(201).json(note);
});

// Get all notes
router.get('/', (req, res) => {
  res.json(notes);
});

// Get a note by ID
router.get('/:id', (req, res) => {
  const note = notes.find(n => n.id === parseInt(req.params.id));
  if (!note) {
    return res.status(404).json({ msg: 'Note not found' });
  }
  res.json(note);
});

// Update a note by ID
router.put('/:id', (req, res) => {
  const note = notes.find(n => n.id === parseInt(req.params.id));
  if (!note) {
    return res.status(404).json({ msg: 'Note not found' });
  }
  const { title, content } = req.body;
  if (title) note.title = title;
  if (content) note.content = content;
  res.json(note);
});

// Delete a note by ID
router.delete('/:id', (req, res) => {
  const index = notes.findIndex(n => n.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ msg: 'Note not found' });
  }
  notes.splice(index, 1);
  res.json({ msg: 'Note deleted' });
});

module.exports = router;