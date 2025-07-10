const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

// Simple UUID generator function
const generateId = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};

// In-memory storage for notes
let notes = [];

// @route    POST api/notes
// @desc     Create a note
// @access   Private
router.post(
  '/',
  auth,
  check('title', 'Title is required').notEmpty(),
  check('content', 'Content is required').notEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { title, content, tags, category } = req.body;

      const newNote = {
        id: generateId(),
        user: req.user.id,
        title,
        content,
        tags: tags || [],
        category: category || '',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      notes.push(newNote);

      console.log('Note created for user:', req.user.id, newNote);
      res.json(newNote);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    GET api/notes
// @desc     Get all notes for current user
// @access   Private
router.get('/', auth, async (req, res) => {
  try {
    const userNotes = notes.filter(note => note.user === req.user.id);
    console.log('Fetching notes for user:', req.user.id, 'count:', userNotes.length);
    res.json(userNotes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/notes/:id
// @desc     Get note by ID for current user
// @access   Private
router.get('/:id', auth, async (req, res) => {
  try {
    const note = notes.find(note => note.id === req.params.id && note.user === req.user.id);

    if (!note) {
      return res.status(404).json({ msg: 'Note not found' });
    }

    console.log('Note retrieved for user:', req.user.id, note);
    res.json(note);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    PUT api/notes/:id
// @desc     Update note for current user
// @access   Private
router.put(
  '/:id',
  auth,
  check('title', 'Title is required').notEmpty(),
  check('content', 'Content is required').notEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { title, content, tags, category } = req.body;
      const noteIndex = notes.findIndex(note => note.id === req.params.id && note.user === req.user.id);

      if (noteIndex === -1) {
        return res.status(404).json({ msg: 'Note not found' });
      }

      // Update note
      notes[noteIndex] = {
        ...notes[noteIndex],
        title,
        content,
        tags: tags || notes[noteIndex].tags,
        category: category || notes[noteIndex].category,
        updatedAt: new Date().toISOString()
      };

      console.log('Note updated for user:', req.user.id, notes[noteIndex]);
      res.json(notes[noteIndex]);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    DELETE api/notes/:id
// @desc     Delete note for current user
// @access   Private
router.delete('/:id', auth, async (req, res) => {
  try {
    const noteIndex = notes.findIndex(note => note.id === req.params.id && note.user === req.user.id);

    if (noteIndex === -1) {
      return res.status(404).json({ msg: 'Note not found' });
    }

    const deletedNote = notes.splice(noteIndex, 1)[0];

    console.log('Note deleted for user:', req.user.id, deletedNote);
    res.json({ msg: 'Note deleted', note: deletedNote });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;