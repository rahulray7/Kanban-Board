import React from 'react';
import { Container, TextField, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from './features/tasks/tasksSlice';
import Board from './components/Board';
import TaskForm from './components/TaskForm';
import './App.css';

function App() {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <TextField 
        label="Search tasks here..." 
        variant="outlined" 
        fullWidth 
        margin="normal" 
        onChange={(e) => dispatch(setSearchQuery(e.target.value))} 
      />
      <Board />
      <Button 
        variant="contained" 
        color="primary" 
        startIcon={<AddIcon />} 
        onClick={handleOpen} 
        className="add-button"
      >
        Add
      </Button>
      <TaskForm open={open} handleClose={handleClose} />
    </Container>
  );
}

export default App;