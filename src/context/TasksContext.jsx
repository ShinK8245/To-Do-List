import React, { createContext, useEffect, useState } from "react";

const TasksContext = createContext();

const TasksContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("default");

  const loadTasksFromLocalStorage = () => {
    const tasksFromLocalStorage = JSON.parse(
      window.localStorage.getItem("react-todo-list-tasks")
    );

    if (tasksFromLocalStorage) {
      setTasks(tasksFromLocalStorage);
    }
  };

  useEffect(() => {
    loadTasksFromLocalStorage();
  }, []);

  const updateTasksAndLocalStorage = (updatedTasks) => {
    setTasks(updatedTasks);
    window.localStorage.setItem(
      "react-todo-list-tasks",
      JSON.stringify(updatedTasks)
    );
  };

  const addTask = (task) => {
    const updatedTasks = [...tasks, task];
    updateTasksAndLocalStorage(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.taskId !== taskId);
    updateTasksAndLocalStorage(updatedTasks);
  };

  const toggleTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.taskId === taskId
        ? { ...task, isCompleted: !task.isCompleted }
        : task
    );
    updateTasksAndLocalStorage(updatedTasks);
  };

  const updateTaskLabel = (taskId, newLabel) => {
    const updatedTasks = tasks.map((task) =>
      task.taskId === taskId ? { ...task, label: newLabel } : task
    );
    updateTasksAndLocalStorage(updatedTasks);
  };

  const updatePriority = (taskId, newPriority) => {
    const updatedTasks = tasks.map((task) =>
      task.taskId === taskId ? { ...task, priority: newPriority } : task
    );
    updateTasksAndLocalStorage(updatedTasks);
  };

  const clearCompletedTasks = () => {
    const uncompletedTasks = tasks.filter((task) => !task.isCompleted);
    updateTasksAndLocalStorage(uncompletedTasks);
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        filter,
        setFilter,
        addTask,
        deleteTask,
        toggleTask,
        updateTaskLabel,
        updatePriority,
        clearCompletedTasks,
        sortOrder,
        setSortOrder,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export { TasksContext, TasksContextProvider };
