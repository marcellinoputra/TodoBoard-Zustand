import classNames from 'classnames';
import { useStore } from '../../store';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Button, Typography } from '@mui/material';
import './Task.css';

const STATUS = 'ONGOING';

export default function Task({ title }) {
  const task = useStore((store) =>
    store.tasks.find((task) => task.title === title)
  );

  const setDraggedTask = useStore((store) => store.setDraggedTasks);

  const deleteTask = useStore((store) => store.deleteTask);

  return (
    <>
      <div
        className="task"
        draggable
        onDragStart={() => {
          setDraggedTask(task.title);
        }}
      >
        <Typography>{task.title}</Typography>
        <Button
          onClick={() => deleteTask(task.title)}
          sx={{
            alignItems: 'right',
            display: 'flex',
            justifyContent: 'space-between',
            width: '10%',
            top: 30,
            right: 5
          }}
        >
          <DeleteIcon />
        </Button>
        <Box
          sx={{
            alignItems: 'right',
            display: 'flex',
            justifyContent: 'end',
          }}
        >
          <Typography className={classNames('status', task.progress)}>
            {task.progress}
          </Typography>
        </Box>
      </div>
    </>
  );
}
