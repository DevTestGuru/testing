const Note = require('../models/Notes');

// In Memory Database Provider
// Structure: [{ user: userId, notes: [note1, note2, ...] }, ...]
const notesDb = [];

function addNote(title, content, userId) {
    const note = new Note(title, content, userId);
    
    // Find user's notes array
    let userNotesObj = notesDb.find(obj => obj.user === userId);
    
    // If user doesn't exist, create new user entry
    if (!userNotesObj) {
        userNotesObj = { user: userId, notes: [] };
        notesDb.push(userNotesObj);
    }
    
    // Add note to user's notes array
    userNotesObj.notes.push(note);
    return note;
}

function getNotes(userId) {
    const userNotesObj = notesDb.find(obj => obj.user === userId);
    return userNotesObj ? userNotesObj.notes : [];
}

function getNoteById(id, userId) {
    const userNotesObj = notesDb.find(obj => obj.user === userId);
    if (!userNotesObj) return null;
    
    return userNotesObj.notes.find(note => note.id === id);
}

function updateNote(id, note, userId) {
    const userNotesObj = notesDb.find(obj => obj.user === userId);
    if (!userNotesObj) return null;
    
    const index = userNotesObj.notes.findIndex(note => note.id === id);
    if (index !== -1) {
        userNotesObj.notes[index] = { ...note, userId, updatedAt: new Date() };
        return userNotesObj.notes[index];
    }
    return null;
}

function deleteNote(id, userId) {
    const userNotesObj = notesDb.find(obj => obj.user === userId);
    if (!userNotesObj) return false;
    
    const index = userNotesObj.notes.findIndex(note => note.id === id);
    if (index !== -1) {
        userNotesObj.notes.splice(index, 1);
        
        // If user has no more notes, remove the user entry
        if (userNotesObj.notes.length === 0) {
            const userIndex = notesDb.findIndex(obj => obj.user === userId);
            if (userIndex !== -1) {
                notesDb.splice(userIndex, 1);
            }
        }
        
        return true;
    }
    return false;
}

module.exports = {
    addNote,
    getNotes,
    getNoteById,
    updateNote,
    deleteNote
}