const express = require('express');
const router = express.Router();

// In-memory storage for notes
let notes = [];
let idCounter = 1;

// @route    POST api/notes
// @desc     Create a new note
// @access   Public
router.post('/', (req, res) => {
  const { title, content } = req.body;
  
  if (!title || !content) {
    return res.status(400).json({ message: 'Title and content are required' });
  }
  
  const newNote = { 
    id: idCounter++, 
    title, 
    content,
    createdAt: new Date().toISOString()
  };
  
  notes.push(newNote);
  console.log('Created note:', newNote);
  res.status(201).json(newNote);
});

// @route    GET api/notes
// @desc     Get all notes
// @access   Public
router.get('/', (req, res) => {
  console.log('Retrieved all notes:', notes);
  res.json(notes);
});

// @route    GET api/notes/:id
// @desc     Get note by ID
// @access   Public
router.get('/:id', (req, res) => {
  const note = notes.find(n => n.id === parseInt(req.params.id));
  
  if (!note) {
    return res.status(404).json({ message: 'Note not found' });
  }
  
  console.log('Retrieved note:', note);
  res.json(note);
});

// @route    PUT api/notes/:id
// @desc     Update note by ID
// @access   Public
router.put('/:id', (req, res) => {
  const { title, content } = req.body;
  const note = notes.find(n => n.id === parseInt(req.params.id));
  
  if (!note) {
    return res.status(404).json({ message: 'Note not found' });
  }

  note.title = title !== undefined ? title : note.title;
  note.content = content !== undefined ? content : note.content;
  note.updatedAt = new Date().toISOString();

  console.log('Updated note:', note);
  res.json(note);
});

// @route    DELETE api/notes/:id
// @desc     Delete note by ID
// @access   Public
router.delete('/:id', (req, res) => {
  const noteIndex = notes.findIndex(n => n.id === parseInt(req.params.id));
  
  if (noteIndex === -1) {
    return res.status(404).json({ message: 'Note not found' });
  }

  const deletedNote = notes.splice(noteIndex, 1)[0];
  console.log('Deleted note:', deletedNote);
  res.json({ message: 'Note deleted successfully', deletedNote });
});

module.exports = router;
