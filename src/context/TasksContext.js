import { createContext, useContext, useState } from "react";

export const TasksContext = createContext();

export const TasksProvider = ({ children }) => {

  const [tasks, setTasks] = useState([]);
  const [isTaskFormVisible, setIsTaskFormVisible] = useState(false);

  return (
    <TasksContext.Provider value={{ tasks, setTasks, isTaskFormVisible, setIsTaskFormVisible }}>
      {children}
    </TasksContext.Provider>
  );
};