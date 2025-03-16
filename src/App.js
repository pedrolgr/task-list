import React, { useState } from 'react';
import TaskEditor from './components/TaskForm';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import NewTaskButton from './components/NewTaskButton';

import { TasksProvider } from './context/TasksContext';


function App() {

  return (
    <TasksProvider>
      <NewTaskButton />
      <TaskList />
    </TasksProvider>
  );
}

export default App;


