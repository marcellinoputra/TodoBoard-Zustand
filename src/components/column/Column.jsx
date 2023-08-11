import { useState } from 'react';
import { useStore } from '../../store';
import Task from '../task/Task';
import './Column.css';
import {
  Box,
  Button,
  FormControl,
  Modal,
  TextField,
  Typography,
} from '@mui/material';
import classNames from 'classnames';

const boxStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  overflowY: 'scroll',
  height: 500,
  p: 4,
};

const textFieldStyle = {
  marginBottom: 10,
};

export default function Column({ progress }) {
  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState(false);

  const tasks = useStore((store) =>
    store.tasks.filter((task) => task.progress === progress)
  );

  const addTask = useStore((store) => store.addTask);

  const setDraggedTask = useStore((store) => store.setDraggedTasks);
  const draggedTask = useStore((store) => store.draggedTasks);
  const moveTask = useStore((store) => store.moveTask);

  function handleClose() {
    setOpen(false);
  }

  function handleOpen() {
    setOpen(true);
  }

  return (
    <div
      className={classNames('column', { drop: drop })}
      onDragOver={(e) => {
        setDrop(true);
        e.preventDefault();
      }}
      onDragLeave={(e) => {
        setDrop(false);
        e.preventDefault();
      }}
      onDrop={(e) => {
        setDrop(false);
        moveTask(draggedTask, progress);
        setDraggedTask(null);
      }}
    >
      <div className="titleWrapper">
        <Typography>{progress}</Typography>
        <button
          onClick={() => {
            handleOpen();
          }}
        >
          Add
        </button>
      </div>
      {tasks.map((task) => (
        <Task title={task.title} key={task.title} />
      ))}
      <Modal open={open} onClose={handleClose}>
        <Box sx={boxStyle} noValidate autoComplete="off">
          <Typography
            variant="h5"
            sx={{ textAlign: 'center', marginBottom: 3 }}
          >
            Add Planing
          </Typography>
          <FormControl sx={{ display: 'flex', justifyContent: 'center' }}>
            <TextField
              required
              label="Planning"
              type="text"
              onChange={(e) => setText(e.target.value)}
              style={textFieldStyle}
            />
            <Button
              onClick={() => {
                addTask(text, progress);
                setOpen(false);
              }}
              type="submit"
              sx={{
                height: 45,
                backgroundColor: 'blue',
                color: 'white',
                fontWeight: 'bold',
                borderColor: 'transparent',
                borderRadius: 20,
                marginTop: 2,
                '&:hover': {
                  backgroundColor: 'darkblue',
                },
              }}
            >
              Submit
            </Button>
          </FormControl>
        </Box>
      </Modal>
    </div>
  );
}
