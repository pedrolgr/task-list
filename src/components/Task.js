import React, { useState, useContext } from 'react';
import { TasksContext } from '../context/TasksContext';
import TaskForm from './TaskForm';

const Task = ({ task }) => {

  const { setTasks } = useContext(TasksContext);
  const { editingTaskId, handleIsEditingTaskFormVisible,
    isEditingTaskFormVisible
   } = useContext(TasksContext);

  const toggleCheckbox = (task) => {
    setTasks((prevTasks) =>
      prevTasks.map((t) =>
        t.id === task.id ? { ...t, completed: !t.completed } : t
      ));
  };

  const deleteTask = (task) => {
    setTasks((prevTasks) =>
      prevTasks.filter((t) => t.id !== task.id)
    );
  };

  return (
    <li style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      <input
        type='checkbox'
        checked={task.completed}
        onChange={() => toggleCheckbox(task)}
      />
      {task.name}

      <button
        onClick={() => deleteTask(task)}
      >
        Delete
      </button>

      <button
        onClick={() => handleIsEditingTaskFormVisible(task.id)}
      >
        Edit
      </button>

      {editingTaskId === task.id && isEditingTaskFormVisible &&<TaskForm task={task} />}
    </li>
  );
};

export default Task;
