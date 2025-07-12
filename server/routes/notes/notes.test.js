const request = require('supertest');
const express = require('express');
const notesRouter = require('./notes');
const dbProvider = require('../../provider/dbProvider');

// Mock dbProvider methods
jest.mock('../../provider/dbProvider');

const app = express();
app.use(express.json());

// Mock authentication middleware
app.use((req, res, next) => {
  req.user = { username: 'testUserId123' };
  next();
});

app.use('/notes', notesRouter);

describe('Notes API', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('GET /notes', () => {
    it('should return all notes sorted by updatedAt', async () => {
      const notes = [
        { id: '1', title: 'A', content: 'A', updatedAt: new Date('2023-01-01') },
        { id: '2', title: 'B', content: 'B', updatedAt: new Date('2023-01-02') }
      ];
      dbProvider.getNotes.mockReturnValue(notes);

      const res = await request(app).get('/notes');
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data[0].id).toBe('2'); // Most recent first
      expect(res.body.count).toBe(2);
      expect(dbProvider.getNotes).toHaveBeenCalledWith('testUserId123');
    });

    it('should return empty array when user has no notes', async () => {
      dbProvider.getNotes.mockReturnValue([]);

      const res = await request(app).get('/notes');
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data).toEqual([]);
      expect(res.body.count).toBe(0);
      expect(dbProvider.getNotes).toHaveBeenCalledWith('testUserId123');
    });
  });

  describe('GET /notes/:id', () => {
    it('should return a note by id', async () => {
      const note = { id: '1', title: 'A', content: 'A', updatedAt: new Date() };
      dbProvider.getNoteById.mockReturnValue(note);

      const res = await request(app).get('/notes/1');
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.id).toBe('1');
      expect(dbProvider.getNoteById).toHaveBeenCalledWith('1', 'testUserId123');
    });

    it('should return 404 if note not found', async () => {
      dbProvider.getNoteById.mockReturnValue(null);

      const res = await request(app).get('/notes/999');
      expect(res.status).toBe(404);
      expect(res.body.success).toBe(false);
      expect(res.body.error).toBe('Note not found');
      expect(dbProvider.getNoteById).toHaveBeenCalledWith('999', 'testUserId123');
    });
  });

  describe('POST /notes', () => {
    it('should create a new note', async () => {
      const newNote = { id: '1', title: 'A', content: 'A', updatedAt: new Date() };
      dbProvider.addNote.mockReturnValue(newNote);

      const res = await request(app)
        .post('/notes')
        .send({ title: 'A', content: 'A' });

      expect(res.status).toBe(201);
      expect(res.body.success).toBe(true);
      expect(res.body.data.id).toBe('1');
      expect(res.body.message).toBe('Note created successfully');
      expect(dbProvider.addNote).toHaveBeenCalledWith('A', 'A', 'testUserId123');
    });

    it('should return 400 for invalid input', async () => {
      const res = await request(app)
        .post('/notes')
        .send({ title: '', content: 'A' });

      expect(res.status).toBe(400);
      expect(res.body.success).toBe(false);
      expect(res.body.error).toBe('Validation failed');
    });

    it('should return 400 for missing title', async () => {
      const res = await request(app)
        .post('/notes')
        .send({ content: 'A' });

      expect(res.status).toBe(400);
      expect(res.body.success).toBe(false);
      expect(res.body.error).toBe('Validation failed');
    });
  });

  describe('PUT /notes/:id', () => {
    it('should update a note', async () => {
      const note = { id: '1', title: 'A', content: 'A', updatedAt: new Date() };
      const updatedNote = { id: '1', title: 'B', content: 'B', updatedAt: new Date() };
      
      dbProvider.getNoteById.mockReturnValue(note);
      dbProvider.updateNote.mockReturnValue(updatedNote);

      const res = await request(app)
        .put('/notes/1')
        .send({ title: 'B', content: 'B' });

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.title).toBe('B');
      expect(res.body.message).toBe('Note updated successfully');
      expect(dbProvider.getNoteById).toHaveBeenCalledWith('1', 'testUserId123');
      expect(dbProvider.updateNote).toHaveBeenCalledWith('1', expect.objectContaining({
        title: 'B',
        content: 'B'
      }), 'testUserId123');
    });

    it('should return 404 if note not found', async () => {
      dbProvider.getNoteById.mockReturnValue(null);

      const res = await request(app)
        .put('/notes/999')
        .send({ title: 'B', content: 'B' });

      expect(res.status).toBe(404);
      expect(res.body.success).toBe(false);
      expect(res.body.error).toBe('Note not found');
    });

    it('should return 404 if update fails', async () => {
      const note = { id: '1', title: 'A', content: 'A', updatedAt: new Date() };
      dbProvider.getNoteById.mockReturnValue(note);
      dbProvider.updateNote.mockReturnValue(null);

      const res = await request(app)
        .put('/notes/1')
        .send({ title: 'B', content: 'B' });

      expect(res.status).toBe(404);
      expect(res.body.success).toBe(false);
      expect(res.body.error).toBe('Note not found');
    });

    it('should return 400 if neither title nor content is provided', async () => {
      const note = { id: '1', title: 'A', content: 'A', updatedAt: new Date() };
      dbProvider.getNoteById.mockReturnValue(note);

      const res = await request(app)
        .put('/notes/1')
        .send({});

      expect(res.status).toBe(400);
      expect(res.body.success).toBe(false);
      expect(res.body.error).toBe('Title or content is required');
    });
  });

  describe('DELETE /notes/:id', () => {
    it('should delete a note', async () => {
      const note = { id: '1', title: 'A', content: 'A', updatedAt: new Date() };
      dbProvider.getNoteById.mockReturnValue(note);
      dbProvider.deleteNote.mockReturnValue(true);

      const res = await request(app).delete('/notes/1');
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.id).toBe('1');
      expect(res.body.message).toBe('Note deleted successfully');
      expect(dbProvider.getNoteById).toHaveBeenCalledWith('1', 'testUserId123');
      expect(dbProvider.deleteNote).toHaveBeenCalledWith('1', 'testUserId123');
    });

    it('should return 404 if note not found', async () => {
      dbProvider.getNoteById.mockReturnValue(null);

      const res = await request(app).delete('/notes/999');
      expect(res.status).toBe(404);
      expect(res.body.success).toBe(false);
      expect(res.body.error).toBe('Note not found');
    });

    it('should return 404 if delete fails', async () => {
      const note = { id: '1', title: 'A', content: 'A', updatedAt: new Date() };
      dbProvider.getNoteById.mockReturnValue(note);
      dbProvider.deleteNote.mockReturnValue(false);

      const res = await request(app).delete('/notes/1');
      expect(res.status).toBe(404);
      expect(res.body.success).toBe(false);
      expect(res.body.error).toBe('Note not found');
    });
  });

  describe('Validation', () => {
    it('should validate title length', async () => {
      const longTitle = 'A'.repeat(101); // 101 characters
      const res = await request(app)
        .post('/notes')
        .send({ title: longTitle, content: 'A' });

      expect(res.status).toBe(400);
      expect(res.body.success).toBe(false);
      expect(res.body.error).toBe('Validation failed');
      expect(res.body.details).toContain('Title cannot exceed 100 characters');
    });

    it('should validate content length', async () => {
      const longContent = 'A'.repeat(5001); // 5001 characters
      const res = await request(app)
        .post('/notes')
        .send({ title: 'A', content: longContent });

      expect(res.status).toBe(400);
      expect(res.body.success).toBe(false);
      expect(res.body.error).toBe('Validation failed');
      expect(res.body.details).toContain('Content cannot exceed 5000 characters');
    });

    it('should validate content type', async () => {
      const res = await request(app)
        .post('/notes')
        .send({ title: 'A', content: 123 });

      expect(res.status).toBe(400);
      expect(res.body.success).toBe(false);
      expect(res.body.error).toBe('Validation failed');
      expect(res.body.details).toContain('Content must be a string');
    });
  });
});