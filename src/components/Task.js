import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask, deleteTask } from '../redux/actions';

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleEdit = () => {
    const newDescription = prompt("Modifier la tâche :", task.description);
    if (newDescription) {
      dispatch(editTask(task.id, newDescription));
    }
  };

  return (
    <div>
      <span style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
        {task.description}
      </span>
      <button onClick={() => dispatch(toggleTask(task.id))}>
        {task.isDone ? 'Pas fait' : 'Fait'}
      </button>
      <button onClick={handleEdit}>Modifier</button>
      <button onClick={() => dispatch(deleteTask(task.id))}>Supprimer</button>
    </div>
  );
};

export default Task;
