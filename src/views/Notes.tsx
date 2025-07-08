import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  IconButton,
  TextField,
  Typography,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Fade,
  Zoom,
  useTheme,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import NoteIcon from '@mui/icons-material/Note';
import { styled } from '@mui/material/styles';

// Set the base URL for axios to point to the backend port
axios.defaults.baseURL = 'http://localhost:5025';

interface Note {
  id: number;
  title: string;
  content: string;
}

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
  },
  background: 'linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)',
  borderRadius: '12px',
  border: '1px solid rgba(0,219,227,0.1)',
}));

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    borderRadius: '16px',
    background: 'linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)',
  },
}));

const Notes: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  const theme = useTheme();

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
    setOpenDialog(false);
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
    setOpenDialog(true);
  };

  const handleEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId === null) return;
    await axios.put(`/api/notes/${editingId}`, { title: editTitle, content: editContent });
    setEditingId(null);
    setEditTitle('');
    setEditContent('');
    setOpenDialog(false);
    fetchNotes();
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setEditingId(null);
    setEditTitle('');
    setEditContent('');
    setTitle('');
    setContent('');
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #173039 0%, #00b4c9 100%)',
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Fade in timeout={1000}>
          <Box sx={{ mb: 6, textAlign: 'center' }}>
            <Typography
              variant="h3"
              component="h1"
              sx={{
                color: '#fff',
                fontWeight: 700,
                mb: 2,
                textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
              }}
            >
              My Notes
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'rgba(255,255,255,0.8)',
                mb: 4,
              }}
            >
              Keep track of your important thoughts and ideas
            </Typography>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={() => setOpenDialog(true)}
              sx={{
                backgroundColor: '#00dbe3',
                borderRadius: '30px',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                textTransform: 'none',
                boxShadow: '0 4px 12px rgba(0,219,227,0.3)',
                '&:hover': {
                  backgroundColor: '#00c4cc',
                  boxShadow: '0 6px 16px rgba(0,219,227,0.4)',
                },
              }}
            >
              Add New Note
            </Button>
          </Box>
        </Fade>

        <Grid container spacing={3}>
          {notes.map((note, index) => (
            <Grid item xs={12} sm={6} md={4} key={note.id}>
              <Zoom in timeout={500} style={{ transitionDelay: `${index * 100}ms` }}>
                <StyledCard>
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <NoteIcon sx={{ color: '#00dbe3', mr: 1 }} />
                      <Typography
                        variant="h6"
                        component="h2"
                        sx={{
                          fontWeight: 600,
                          color: '#173039',
                        }}
                      >
                        {note.title}
                      </Typography>
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#666',
                        mb: 3,
                        lineHeight: 1.6,
                      }}
                    >
                      {note.content}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
                      <IconButton
                        onClick={() => startEdit(note)}
                        sx={{
                          color: '#00dbe3',
                          '&:hover': { backgroundColor: 'rgba(0,219,227,0.1)' },
                        }}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        onClick={() => handleDelete(note.id)}
                        sx={{
                          color: '#ff4444',
                          '&:hover': { backgroundColor: 'rgba(255,68,68,0.1)' },
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  </CardContent>
                </StyledCard>
              </Zoom>
            </Grid>
          ))}
        </Grid>

        <StyledDialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
          <DialogTitle sx={{
            background: 'linear-gradient(135deg, #173039 0%, #00b4c9 100%)',
            color: '#fff',
            py: 2,
          }}>
            {editingId ? 'Edit Note' : 'Add New Note'}
          </DialogTitle>
          <DialogContent sx={{ p: 3 }}>
            <Box component="form" onSubmit={editingId ? handleEdit : handleCreate}>
              <TextField
                fullWidth
                label="Title"
                value={editingId ? editTitle : title}
                onChange={e => editingId ? setEditTitle(e.target.value) : setTitle(e.target.value)}
                margin="normal"
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '&:hover fieldset': {
                      borderColor: '#00dbe3',
                    },
                  },
                }}
              />
              <TextField
                fullWidth
                label="Content"
                value={editingId ? editContent : content}
                onChange={e => editingId ? setEditContent(e.target.value) : setContent(e.target.value)}
                margin="normal"
                required
                multiline
                rows={4}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '&:hover fieldset': {
                      borderColor: '#00dbe3',
                    },
                  },
                }}
              />
            </Box>
          </DialogContent>
          <DialogActions sx={{ p: 3, pt: 0 }}>
            <Button
              onClick={handleCloseDialog}
              sx={{
                color: '#666',
                '&:hover': { backgroundColor: 'rgba(0,0,0,0.04)' },
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={editingId ? handleEdit : handleCreate}
              variant="contained"
              sx={{
                backgroundColor: '#00dbe3',
                borderRadius: '20px',
                px: 3,
                '&:hover': {
                  backgroundColor: '#00c4cc',
                },
              }}
            >
              {editingId ? 'Save Changes' : 'Add Note'}
            </Button>
          </DialogActions>
        </StyledDialog>
      </Container>
    </Box>
  );
};

export default Notes;