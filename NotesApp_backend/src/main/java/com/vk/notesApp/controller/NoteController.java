package com.vk.notesApp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.vk.notesApp.model.Note;
import com.vk.notesApp.service.NoteService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/notes")
@CrossOrigin(origins = "*")
public class NoteController {

	@Autowired
	private NoteService noteService;

	@PostMapping("createNote")
	public ResponseEntity<Note> createNote(@Valid @RequestBody Note note) {
		return ResponseEntity.ok(noteService.createNote(note));
	}

	@GetMapping("getAllNotes")
	public ResponseEntity<List<Note>> getAllNotes() {
		return ResponseEntity.ok(noteService.getAllNotes());
	}

	@GetMapping("getNoteById/{id}")
	public ResponseEntity<Note> getNoteById(@PathVariable int id) {
		return ResponseEntity.ok(noteService.getNoteById(id));
	}

	@PutMapping("updateNote/{id}")
	public ResponseEntity<Note> updateNote(@PathVariable int id, @Valid @RequestBody Note note) {
		return ResponseEntity.ok(noteService.updateNote(id, note));
	}

	@DeleteMapping("deleteNote/{id}")
	public ResponseEntity<Void> deleteNote(@PathVariable int id) {
		noteService.deleteNote(id);
		return ResponseEntity.noContent().build();
	}
}