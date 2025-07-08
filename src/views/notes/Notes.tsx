import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Set the base URL for axios to point to the backend port
axios.defaults.baseURL = 'http://localhost:5025';

interface Note {
  id: number;
  title: string;
  content: string;
}

const Notes: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');

  const fetchNotes = async () => {
    const res = await axios.get('/api/notes');
    setNotes(res.data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content) return;
    await axios.post('/api/notes', { title, content });
    setTitle('');
    setContent('');
    fetchNotes();
  };

  const handleDelete = async (id: number) => {
    await axios.delete(`/api/notes/${id}`);
    fetchNotes();
  };

  const startEdit = (note: Note) => {
    setEditingId(note.id);
    setEditTitle(note.title);
    setEditContent(note.content);
  };

  const handleEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId === null) return;
    await axios.put(`/api/notes/${editingId}`, { title: editTitle, content: editContent });
    setEditingId(null);
    setEditTitle('');
    setEditContent('');
    fetchNotes();
  };

  return (
    <div style={{ maxWidth: 600, margin: '2rem auto', padding: 20, background: '#fff', borderRadius: 8 }}>
      <h2>Notes</h2>
      <form onSubmit={handleCreate} style={{ marginBottom: 20 }}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          style={{ marginRight: 8 }}
        />
        <input
          type="text"
          placeholder="Content"
          value={content}
          onChange={e => setContent(e.target.value)}
          style={{ marginRight: 8 }}
        />
        <button type="submit">Add Note</button>
      </form>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {notes.map(note => (
          <li key={note.id} style={{ marginBottom: 16, border: '1px solid #eee', padding: 12, borderRadius: 4 }}>
            {editingId === note.id ? (
              <form onSubmit={handleEdit}>
                <input
                  type="text"
                  value={editTitle}
                  onChange={e => setEditTitle(e.target.value)}
                  style={{ marginRight: 8 }}
                />
                <input
                  type="text"
                  value={editContent}
                  onChange={e => setEditContent(e.target.value)}
                  style={{ marginRight: 8 }}
                />
                <button type="submit">Save</button>
                <button type="button" onClick={() => setEditingId(null)} style={{ marginLeft: 8 }}>Cancel</button>
              </form>
            ) : (
              <>
                <strong>{note.title}</strong>: {note.content}
                <button onClick={() => startEdit(note)} style={{ marginLeft: 8 }}>Edit</button>
                <button onClick={() => handleDelete(note.id)} style={{ marginLeft: 8 }}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;