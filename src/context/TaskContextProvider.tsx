import React, { createContext, useState } from "react";
import { v4 as uuid } from "uuid";
import useLocalStorage from "../hooks/useLocalStorage";
export const TaskContext = createContext<ContextType | null>(null);

const TaskContextProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [tasks, setTasks] = useLocalStorage<IContext[]>("tasks", []);
  const [editTodo, setEditTodo] = useState<IContext | undefined>(undefined);

  const addTask = (title: string) => {
    setTasks([...tasks, { title, id: uuid() }]);
  };

  const deleteTask = (id: number | string) => {
    const newTasks = tasks.filter((t) => t.id !== id);
    setTasks(newTasks);
  };

  const clearTask = () => {
    setTasks([]);
  };

  const findTask = (id: number | string) => {
    const task = tasks.find((t) => t.id === id);
    setEditTodo(task);
  };

  const editTask = (title: string, id: number | string) => {
    const updatedTask = tasks.map((t) => (t.id === id ? { title, id } : t));
    setTasks(updatedTask);
    setEditTodo(undefined);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        deleteTask,
        clearTask,
        findTask,
        editTodo,
        editTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
