import React, { useState, useContext } from 'react';
import TaskForm from './TaskForm';
import { TasksContext } from '../context/TasksContext';


const NewTaskButton = () => {

    const {isTaskFormVisible, setIsTaskFormVisible} = useContext(TasksContext);

    return (
        <>
            <button
            onClick={() => setIsTaskFormVisible(prev => !prev)}>Create Task</button>
            {isTaskFormVisible && <TaskForm />}
        </>
    )
}

export default NewTaskButton;