// TODO: For production
//  - Persist notes to a real database instead of in-memory storage using CAS-like operations
//  - Add unit tests and integration tests
//  - Add rate limiting and input sanitization
//  - Replace console logging with a proper logging library
//  - Associate notes with users and enforce permissions
//  - Add open API docs & swagger
// -  etc.

const express = require('express');
const {check, validationResult} = require('express-validator');
// Auth should be active for the prod app
// const auth = require('../../middleware/auth');

const router = express.Router();

/**
 * In-memory notes store
 */
let notes = [];
let nextId = 1;


/**
 * Creates a note
 */
router.post(
    '/',
    [
        // auth, auth should be active for the prod app
        check('title', 'Title is required').notEmpty(),
        check('content', 'Content is required').notEmpty()
    ],
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }
        const {title, content} = req.body;
        const note = {id: nextId++, title, content};
        notes.push(note);
        console.log(`Note created: ${note.id}`);
        res.status(201).json(note);
    }
);

/**
 * Get all notes
 */
router.get('/',
    // auth, auth should be active for the prod app
    (req, res) => {
        res.json(notes);
    });

/**
 * Get note by ID
 */
router.get('/:id',
    // auth, auth should be active for the prod app
    (req, res) => {
        const id = parseInt(req.params.id, 10);
        const note = notes.find(n => n.id === id);
        if (!note) {
            return res.status(404).json({msg: 'Note not found'});
        }
        res.json(note);
    });

/**
 * Update a note
 */
router.put(
    '/:id',
    [
        // auth, auth should be active for the prod app
        check('title').optional().notEmpty().withMessage('Title cannot be empty'),
        check('content').optional().notEmpty().withMessage('Content cannot be empty')
    ],
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }
        const id = parseInt(req.params.id, 10);
        const note = notes.find(n => n.id === id);
        if (!note) {
            return res.status(404).json({msg: 'Note not found'});
        }
        const {title, content} = req.body;
        if (title !== undefined) note.title = title;
        if (content !== undefined) note.content = content;
        console.log(`Note updated: ${note.id}`);
        res.json(note);
    }
);

/**
 * Delete a note
 */
router.delete('/:id',
    // auth, auth should be active for the prod app
    (req, res) => {
        const id = parseInt(req.params.id, 10);
        const index = notes.findIndex(n => n.id === id);
        if (index === -1) {
            return res.status(404).json({msg: 'Note not found'});
        }
        const removed = notes.splice(index, 1)[0];
        console.log(`Note deleted: ${removed.id}`);
        res.json(removed);
    });

module.exports = router;
