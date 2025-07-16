package com.vk.notesApp.service;

import org.springframework.stereotype.Service;

import com.vk.notesApp.exception.NoteNotFoundException;
import com.vk.notesApp.model.Note;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicInteger;

@Service
public class NoteService {
    private static final Map<Integer, Note> notes = new ConcurrentHashMap<>();
    private final AtomicInteger currentId = new AtomicInteger(1);

    public List<Note> getAllNotes() {
        return new ArrayList<>(notes.values());
    }

    public Note getNoteById(int id) {
        Note note = notes.get(id);
        if (note == null) throw new NoteNotFoundException("Note not found with id: " + id);
        return note;
    }

    public Note createNote(Note note) {
        int id = currentId.getAndIncrement();
        note.setId(id);
        notes.put(id, note);
        return note;
    }

    public Note updateNote(int id, Note updatedNote) {
        if (!notes.containsKey(id)) throw new NoteNotFoundException("Note not found with id: " + id);
        updatedNote.setId(id);
        notes.put(id, updatedNote);
        return updatedNote;
    }

    public void deleteNote(int id) {
        if (!notes.containsKey(id)) throw new NoteNotFoundException("Note not found with id: " + id);
        notes.remove(id);
    }
}