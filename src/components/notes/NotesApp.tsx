import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

type Note = {
  id: string;
  title: string;
  content: string;
  createdAt?: string;
  updatedAt?: string;
};

const NotesApp: React.FC = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const user = params.get("user");
  const [notes, setNotes] = useState<Note[]>([]);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [form, setForm] = useState<{ title: string; content: string }>({ title: "", content: "" });
  const [isEditing, setIsEditing] = useState(false);
  const credentialsRef = useRef<{ username: string; password: string } | null>(null);

  const BASE_URL = "http://localhost:5025/v1/api/notes";

  // Helper to encode credentials
  const getAuthHeader = () => {
    if (user === "admin") {
      const token = btoa(`${user}:${user}`);
      return { Authorization: `Basic ${token}` };
    }
    if (!credentialsRef.current) return {};
    const token = btoa(`${credentialsRef.current.username}:${credentialsRef.current.password}`);
    return { Authorization: `Basic ${token}` };
  };

  // Helper to fetch with auth and handle 401
  const fetchWithAuth = async (url: string, options: RequestInit = {}, retry = true): Promise<any> => {
    const headers = {
      ...(options.headers as Record<string, string> || {}),
      ...(getAuthHeader() as Record<string, string> || {}),
    };
    console.trace("headers", headers);
    const response = await fetch(url, { ...options, headers });
    if (response.status === 401 && retry) {
      // Prompt for credentials
      const username = window.prompt("Enter username for Basic Auth:");
      if (!username) throw new Error("Username required");
      const password = window.prompt("Enter password for Basic Auth:");
      if (password === null) throw new Error("Password required");
      credentialsRef.current = { username, password };
      // Retry with new credentials
      const retryHeaders = {
        ...(options.headers as Record<string, string> || {}),
        ...(getAuthHeader() as Record<string, string> || {}),
      };
      const retryResponse = await fetch(url, { ...options, headers: retryHeaders });
      if (!retryResponse.ok) throw new Error(await retryResponse.text());
      return retryResponse.json();
    }
    if (!response.ok) throw new Error(await response.text());
    return response.json();
  };

  // Fetch notes
  useEffect(() => {
    console.log("fetching notes");
    fetchWithAuth(BASE_URL)
      .then(data => setNotes(data.data || []))
      .catch(err => alert("Failed to fetch notes: " + err.message));
    // eslint-disable-next-line
  }, []);

  // Select a note
  const handleSelect = (note: Note) => {
    setSelectedNote(note);
    setForm({ title: note.title, content: note.content });
    setIsEditing(false);
  };

  // Handle form change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Create note
  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    fetchWithAuth(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then(data => {
        setNotes([data.data, ...notes]);
        setForm({ title: "", content: "" });
      })
      .catch(err => alert("Failed to create note: " + err.message));
  };

  // Update note
  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedNote) return;
    fetchWithAuth(`${BASE_URL}/${selectedNote.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then(data => {
        setNotes(notes.map(n => (n.id === selectedNote.id ? data.data : n)));
        setSelectedNote(data.data);
        setIsEditing(false);
      })
      .catch(err => alert("Failed to update note: " + err.message));
  };

  // Delete note
  const handleDelete = (id: string) => {
    fetchWithAuth(`${BASE_URL}/${id}`, { method: "DELETE" })
      .then(() => {
        setNotes(notes.filter(n => n.id !== id));
        if (selectedNote && selectedNote.id === id) setSelectedNote(null);
      })
      .catch(err => alert("Failed to delete note: " + err.message));
  };

  return (
    <div style={{ display: "flex", gap: 24 }}>
      {/* Notes List */}
      <div style={{ width: 300 }}>
        <h2>Notes</h2>
        <form onSubmit={handleCreate} style={{ marginBottom: 16 }}>
          <input
            name="title"
            placeholder="Title"
            value={form.title}
            onChange={handleChange}
            required
            style={{ width: "100%", marginBottom: 8 }}
          />
          <textarea
            name="content"
            placeholder="Content"
            value={form.content}
            onChange={handleChange}
            required
            style={{ width: "100%", marginBottom: 8 }}
          />
          <button type="submit">Create Note</button>
        </form>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {notes.map(note => (
            <li
              key={note.id}
              style={{
                padding: 8,
                marginBottom: 8,
                background: selectedNote?.id === note.id ? "#eee" : "#fafafa",
                cursor: "pointer",
                border: "1px solid #ddd",
              }}
              onClick={() => handleSelect(note)}
            >
              <strong>{note.title}</strong>
              <button
                style={{ float: "right", color: "red", border: "none", background: "none", cursor: "pointer" }}
                onClick={e => {
                  e.stopPropagation();
                  handleDelete(note.id);
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Side Panel */}
      <div style={{ flex: 1, minWidth: 300 }}>
        {selectedNote ? (
          <div>
            <h2>Note Details</h2>
            {isEditing ? (
              <form onSubmit={handleUpdate}>
                <input
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  required
                  style={{ width: "100%", marginBottom: 8 }}
                />
                <textarea
                  name="content"
                  value={form.content}
                  onChange={handleChange}
                  required
                  style={{ width: "100%", marginBottom: 8 }}
                />
                <button type="submit">Update</button>
                <button type="button" onClick={() => setIsEditing(false)} style={{ marginLeft: 8 }}>
                  Cancel
                </button>
              </form>
            ) : (
              <div>
                <h3>{selectedNote.title}</h3>
                <p>{selectedNote.content}</p>
                <button onClick={() => setIsEditing(true)}>Edit</button>
              </div>
            )}
          </div>
        ) : (
          <div>
            <h2>Select a note to view</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotesApp;