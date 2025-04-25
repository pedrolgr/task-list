import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import TaskEditor from './components/TaskForm';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import NewTaskButton from './components/NewTaskButton';

import { TasksProvider } from './context/TasksContext';
import Login from './pages/Login';
import TaskApp from './pages/TaskApp';


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/taskapp' element={<TaskApp />}/>
      </Routes>
    </Router>

    /**<TasksProvider>
      <NewTaskButton />
      <TaskList />
    </TasksProvider> */
  );
}

export default App;


