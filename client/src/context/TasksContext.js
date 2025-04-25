import { createContext, useContext, useState } from "react";

export const TasksContext = createContext();

export const TasksProvider = ({ children }) => {

  const [tasks, setTasks] = useState([]);
  const [isCreatingTaskFormVisible, setIsCreatingTaskFormVisible] = useState(false);
  const [isEditingTaskFormVisible, setIsEditingTaskFormVisible] = useState(false);
  const [editingTaskId, setEditingTaskId] = useState(null);

  const handleIsCreatingTaskFormVisible = () => {
    if (isCreatingTaskFormVisible) {
      setIsEditingTaskFormVisible(prev => !isEditingTaskFormVisible);
      setIsCreatingTaskFormVisible(prev => !isCreatingTaskFormVisible);
      setEditingTaskId(null);
    }
    else {
      setIsCreatingTaskFormVisible(true);
      setIsEditingTaskFormVisible(false);
    }
  };

  const handleIsEditingTaskFormVisible = (taskId) => {
    setEditingTaskId(editingTaskId === taskId ? null : taskId);
    setIsEditingTaskFormVisible(editingTaskId !== taskId);
    if(isCreatingTaskFormVisible) setIsCreatingTaskFormVisible(false);
  };

  return (
    <TasksContext.Provider value={{
      tasks,
      setTasks,
      isCreatingTaskFormVisible,
      setIsCreatingTaskFormVisible,
      isEditingTaskFormVisible,
      setIsEditingTaskFormVisible,
      editingTaskId,
      setEditingTaskId,
      handleIsCreatingTaskFormVisible,
      handleIsEditingTaskFormVisible
    }}>
      {children}
    </TasksContext.Provider>
  );
};
