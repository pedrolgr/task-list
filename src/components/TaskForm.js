import React, { useState, useContext, useEffect } from 'react';
import { TasksContext } from '../context/TasksContext';

const TaskForm = ({ task }) => {
    const { tasks, setTasks } = useContext(TasksContext);
    const {isTaskFormVisible, setIsTaskFormVisible} = useContext(TasksContext)
    
    const [newTask, setNewTask] = useState(task ? task.name : '');

    const saveTask = () => {
        if(newTask.trim() !== ''){
            if(task){
                setTasks((prevTasks) =>
                prevTasks.map((t) =>
                t.id === task.id ? {...t, name: newTask} : t))
            } else {
                const newTaskObj = {
                    id: tasks.length, 
                    name: newTask, 
                    completed: false
                }
                setTasks((prevTasks) => [...prevTasks, newTaskObj]);
            }
        setNewTask('');
        setIsTaskFormVisible(prev => !prev);
    }
  };

    return (
        <div>
            <input
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />
            <button 
                onClick={saveTask}>
                Salvar
            </button>
        </div>
    );
};

export default TaskForm;
