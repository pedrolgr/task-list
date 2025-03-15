import React, { useState, useContext } from 'react';
import { TasksContext } from '../context/TasksContext';
import { useId } from 'react';

const AddTask = () => {

    const { tasks, setTasks } = useContext(TasksContext);
    const [newTask, setNewTask] = useState('');

    const saveTask = (newTask) => {
        if(newTask.trim() !== ''){
        const newTaskObj = {
            id: tasks.length, 
            name: newTask, 
            completed: false
        }
        setTasks((prevTasks) => [...prevTasks, newTaskObj]);
        setNewTask('');
    }
    
  }

    return (
        <div>
            <input
                type='text'
                value={newTask}
                onChange={e => setNewTask(e.target.value)}>
            </input>

            <button
                onClick={() => saveTask(newTask)}>
                    Salvar
            </button>
        </div>
    );
}

export default AddTask;