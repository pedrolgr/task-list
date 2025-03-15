import React, { useState } from 'react';
import TaskEditor from './components/TaskEditor';
import TaskList from './components/TaskList';
import { TasksProvider } from './context/TasksContext';
import './App.css';
import AddTask from './components/AddTask';

function App() {

  return (
    <TasksProvider>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
}

export default App;












































  /*const [showEditor, setShowEditor] = useState(false);

  const [selectedTask, setSelectedTask] = useState(null);

  

  const toggleCheckbox = (indexTask) => {
    setTasks(prevTasks => 
      prevTasks.map((task, index) => {
        if(index === indexTask) {
          return {...task, completed: !task.completed}
        }

        return task;
      }))
  }

  const deleteTask = (indexTask) => {
    setTasks(prevTasks => 
      prevTasks.filter((_, index) =>
        index !== indexTask))
  }

  const toggleEditor = (index) => {
    setSelectedTask(index)
    setShowEditor(!showEditor)
  }

  const updatedTask = (updateTask) => {
    setTasks(prevTasks =>
      prevTasks.map(())
    )
  }*/


