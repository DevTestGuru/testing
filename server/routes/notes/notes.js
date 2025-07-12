const express = require('express');
const router = express.Router();
const { getNotes, getNoteById, addNote, updateNote, deleteNote } = require('../../provider/dbProvider');

// Get all notes (Protected)
router.get('/', (req, res) => {
  try {
    const userId = req.user.username;
    
    // Sort by updatedAt descending (most recent first)
    const sortedNotes = [...getNotes(userId)].sort((a, b) =>
      new Date(b.updatedAt || b.createdAt) - new Date(a.updatedAt || a.createdAt)
    );

    res.json({
      success: true,
      data: sortedNotes,
      count: sortedNotes.length,
      authenticatedUser: req.user.id
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Internal server error',
      message: error.message
    });
  }
});

// Get note by ID (Protected)
router.get('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.username;

    if (!id) {
      return res.status(400).json({
        success: false,
        error: 'Note ID is required'
      });
    }

    const note = getNoteById(id, userId);

    if (!note) {
      return res.status(404).json({
        success: false,
        error: 'Note not found'
      });
    }

    res.json({
      success: true,
      data: note,
      authenticatedUser: req.user.id
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Internal server error',
      message: error.message
    });
  }
});

// Create new note (Protected)
router.post('/', (req, res) => {
  try {
    const { title, content } = req.body;
    const userId = req.user.username;

    // Validate input
    const validationErrors = validateNote(title, content);
    if (validationErrors.length > 0) {
      return res.status(400).json({
        success: false,
        error: 'Validation failed',
        details: validationErrors
      });
    }

    const newNote = addNote(title, content, userId);

    res.status(201).json({
      success: true,
      data: newNote,
      message: 'Note created successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Internal server error',
      message: error.message
    });
  }
});

// Update note (Protected)
router.put('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const userId = req.user.username;

    if (!id) {
      return res.status(400).json({
        success: false,
        error: 'Note ID is required'
      });
    }

    if (!title && !content) {
      return res.status(400).json({
        success: false,
        error: 'Title or content is required'
      });
    }

    // Find note
    const note = getNoteById(id, userId);
    if (!note) {
      return res.status(404).json({
        success: false,
        error: 'Note not found'
      });
    }

    // Validate input
    const validationErrors = validateNote(title || note.title, content || note.content);
    if (validationErrors.length > 0) {
      return res.status(400).json({
        success: false,
        error: 'Validation failed',
        details: validationErrors
      });
    }

    // Update note
    const updatedNote = updateNote(id, {
      ...note,
      title: title.trim(),
      content: content ? content.trim() : ''
    }, userId);

    if (!updatedNote) {
      return res.status(404).json({
        success: false,
        error: 'Note not found'
      });
    }

    res.json({
      success: true,
      data: updatedNote,
      message: 'Note updated successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Internal server error',
      message: error.message
    });
  }
});

// Delete note (Protected)
router.delete('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.username;

    if (!id) {
      return res.status(400).json({
        success: false,
        error: 'Note ID is required'
      });
    }

    // Find note
    const note = getNoteById(id, userId);
    if (!note) {
      return res.status(404).json({
        success: false,
        error: 'Note not found'
      });
    }

    // Delete note
    const deleted = deleteNote(id, userId);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        error: 'Note not found'
      });
    }

    res.json({
      success: true,
      data: note,
      message: 'Note deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Internal server error',
      message: error.message
    });
  }
});

const validateNote = (title, content) => {
  const errors = [];
  
  if (!title || typeof title !== 'string' || title.trim().length === 0) {
    errors.push('Title is required and must be a non-empty string');
  }
  
  if (title && title.length > 100) {
    errors.push('Title cannot exceed 100 characters');
  }
  
  if (content && typeof content !== 'string') {
    errors.push('Content must be a string');
  }
  
  if (content && content.length > 5000) {
    errors.push('Content cannot exceed 5000 characters');
  }
  
  return errors;
};

module.exports = router;