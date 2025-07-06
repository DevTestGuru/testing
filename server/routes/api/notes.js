const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory storage for notes
let notes = [];
let idCounter = 1;

// @route    POST api/notes
// @desc CREATE - POST /notes
// @access   Public
app.post('/notes', (req, res) => {
  const { title, content } = req.body;
  const newNote = { id: idCounter++, title, content };
  notes.push(newNote);
  console.log('Created:', newNote);
  res.status(201).json(newNote);
});


// @route    GET api/notes
// @desc     Get all notes
// @access   Public
app.get('/notes', (req, res) => {
  res.json(notes);
});


// @route    GET api/notes/:id
// @desc     Get note by ID
// @access   Public
app.get('/notes/:id', (req, res) => {
  const note = notes.find(n => n.id === parseInt(req.params.id));
  if (!note) return res.status(404).json({ message: 'Note not found' });
  res.json(note);
});

// @route    PUT api/notes/:id
// @desc     Update note by ID
// @access   Public
app.put('/notes/:id', (req, res) => {
  const { title, content } = req.body;
  const note = notes.find(n => n.id === parseInt(req.params.id));
  if (!note) return res.status(404).json({ message: 'Note not found' });

  note.title = title !== undefined ? title : note.title;
  note.content = content !== undefined ? content : note.content;

  console.log('Updated:', note);
  res.json(note);
});

// @route    DELETE api/notes/:id
// @desc     Delete note by ID
// @access   Public
app.delete('/notes/:id', (req, res) => {
  const noteIndex = notes.findIndex(n => n.id === parseInt(req.params.id));
  if (noteIndex === -1) return res.status(404).json({ message: 'Note not found' });

  const deletedNote = notes.splice(noteIndex, 1);
  console.log('Deleted:', deletedNote[0]);
  res.json({ message: 'Note deleted successfully' });
});

// Simple Frontend to Display Notes
app.get('/', (req, res) => {
  res.send(`
    <h1>Notes</h1>
    <ul>
      ${notes.map(note => `<li><strong>${note.title}:</strong> ${note.content}</li>`).join('')}
    </ul>
    <p>Use Postman or curl to create/update/delete notes.</p>
  `);
});

app.listen(PORT, () => {
  console.log(`Notes API running at http://localhost:${PORT}`);
});
