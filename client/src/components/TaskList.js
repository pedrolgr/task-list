import React, { useState, useContext } from 'react';
import { TasksContext } from '../context/TasksContext';

import Task from "./Task"

const TaskList = () => {

    const { tasks } = useContext(TasksContext);

    return (
        <ul>
            {tasks.map((task) => (
                <Task key={task.id} task={task} />
            ))}
        </ul>
    )
}

export default TaskList;