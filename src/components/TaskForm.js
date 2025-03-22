import React, { useState, useContext } from 'react';
import { TasksContext } from '../context/TasksContext';

const TaskForm = ({ task }) => {
  const { tasks, setTasks, setIsCreatingTaskFormVisible, setEditingTaskId, setIsEditingTaskFormVisible } = useContext(TasksContext);

  const [newTask, setNewTask] = useState(task ? task.name : '');

  const saveTask = () => {
    if (newTask.trim() !== '') {
      if (task) {
        setTasks((prevTasks) =>
          prevTasks.map((t) =>
            t.id === task.id ? { ...t, name: newTask } : t
          ));
      } else {
        const newTaskObj = {
          id: tasks.length,
          name: newTask,
          completed: false
        };
        setTasks((prevTasks) => [...prevTasks, newTaskObj]);
      }

      setNewTask('');
      if (task) {
        setEditingTaskId(null);
        setIsEditingTaskFormVisible(false);
      } else {
        setIsCreatingTaskFormVisible(false);
      }
    }
  };

  return (
    <div>
      <input
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={saveTask}>
        Salvar
      </button>
    </div>
  );
};

export default TaskForm;
