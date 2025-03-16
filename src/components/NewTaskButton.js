import React, { useState, useContext } from 'react';
import TaskForm from './TaskForm';
import { TasksContext } from '../context/TasksContext';


const NewTaskButton = () => {

    const {isCreatingTaskFormVisible, setIsCreatingTaskFormVisible,
        isEditingTaskFormVisible, setIsEditingTaskFormVisible,
        handleIsCreatingTaskFormVisible, handleIsEditingTaskFormVisible } = useContext(TasksContext)

    return (
        <>
            <button
            onClick={handleIsCreatingTaskFormVisible}>Create Task</button>
            {isCreatingTaskFormVisible && <TaskForm />}
        </>
    )
}

export default NewTaskButton;