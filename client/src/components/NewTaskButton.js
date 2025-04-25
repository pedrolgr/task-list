import React, { useState, useContext } from 'react';
import TaskForm from './TaskForm';
import { TasksContext } from '../context/TasksContext';


const NewTaskButton = () => {

    const {isCreatingTaskFormVisible, handleIsCreatingTaskFormVisible } = useContext(TasksContext)

    return (
        <>
            <button
            onClick={handleIsCreatingTaskFormVisible}>Create Task</button>
            {isCreatingTaskFormVisible && <TaskForm />}
        </>
    )
}

export default NewTaskButton;