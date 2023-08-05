import React, { createContext, useState, useEffect } from 'react';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const showTasks = async () => {
    const response = await fetch('api/task/list');
    if (response.ok) {
        const data = await response.json();
        setTasks(data);
    }
    else {
        console.log("status code: " + response.status)
    }
  };

  useEffect(() => {
    showTasks();
  }, []);

  const handleAddTask = async (taskDescription) => {
    await fetch('api/task/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({ description: taskDescription }),
    });
    await showTasks();
  };

  const handleRemoveTask = async (taskId) => {
    await fetch("api/task/remove/" + taskId, {
        method: "DELETE"
      })
    await showTasks();
  }

  return (
    <TaskContext.Provider value={{ tasks, handleAddTask, handleRemoveTask }}>
      {children}
    </TaskContext.Provider>
  );
};
