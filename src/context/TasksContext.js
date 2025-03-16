import { createContext, useContext, useState } from "react";

export const TasksContext = createContext();

export const TasksProvider = ({ children }) => {

  const [tasks, setTasks] = useState([]);
  const [isCreatingTaskFormVisible, setIsCreatingTaskFormVisible] = useState(false);
  const [isEditingTaskFormVisible, setIsEditingTaskFormVisible] = useState(false);

  const handleIsCreatingTaskFormVisible = () => {
    if(isCreatingTaskFormVisible){
      setIsEditingTaskFormVisible(false);
    } else {
      setIsCreatingTaskFormVisible(true);
      setIsEditingTaskFormVisible(false);
    }
  }

  const handleIsEditingTaskFormVisible = () => {
    if(isEditingTaskFormVisible){
      setIsCreatingTaskFormVisible(false);
    } else {
      setIsEditingTaskFormVisible(true);
      setIsCreatingTaskFormVisible(false);
    }
  }

  return (
    <TasksContext.Provider value={{ tasks, setTasks,
      isCreatingTaskFormVisible, setIsCreatingTaskFormVisible,
      isEditingTaskFormVisible, setIsEditingTaskFormVisible,
      handleIsCreatingTaskFormVisible, handleIsEditingTaskFormVisible
     }}>
      {children}
    </TasksContext.Provider>
  );
};