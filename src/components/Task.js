import React, { useState, useContext } from 'react';
import { TasksContext } from '../context/TasksContext';

const Task = ({task}) => {

    const {setTasks} = useContext(TasksContext);

    const toggleCheckbox = (task) => {
        setTasks((prevTasks) =>
        prevTasks.map((t) => (
            t.id === task.id ? {...t, completed: !t.completed} : t
        )))
    }
 
    return(
        <li>
            
            <input
                type='checkbox'
                checked={task.completed}
                onChange={() => toggleCheckbox(task)}>
            </input>
            
            {task.name}
  
              
            <button>
                Deletar
            </button>

            <button>
                Editar
            </button>
        </li>
    )
}

export default Task;