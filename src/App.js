import React, { useState } from 'react';
import './App.css';

function App() {

  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const saveTask = (newTask) => {
    if(newTask.trim() !== ''){
      setTasks([...tasks, {name: newTask, completed: false}])
      setNewTask('')
    }
    
  }

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
      prevTasks.filter((task, index) =>
        index !== indexTask))
  }

  return (
    <div>
      <input
      type='text'
      value={newTask}
      onChange={e => setNewTask(e.target.value)}></input>

      <button
      onClick={() => saveTask(newTask)}>Salvar
      </button>

      <ul>
        {tasks.map((task, index) =>
            <li 
              key={index}
              style={{textDecoration: task.completed ? 'line-through' : 'none'}}>
              <input
                type='checkbox'
                checked={task.completed}
                onChange={() => toggleCheckbox(index)}>
              </input>

              {task.name}
              
              <button
              onClick={() => deleteTask(index)}>
                Deletar
              </button>
            </li>
        )}
      </ul>
    </div>
  );
}

export default App;




