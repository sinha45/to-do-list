import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (newTask) => {
    const taskId = Math.floor(Math.random() * 10000); // Generate a random ID
    const taskWithId = { ...newTask, id: taskId };
    setTasks([...tasks, taskWithId]);
  };
  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleToggleTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleEditTask = (taskId, newName) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, name: newName } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="container mx-auto p-8 text-gray-500">
      <h1 className="text-3xl font-bold  rounded-xl mb-8 text-center">
        Todo List
      </h1>
      <TaskForm onAddTask={handleAddTask} />
      <div className="mt-8">
        {tasks.map((task) => (
          <TaskList
            key={task.id}
            task={task}
            onDelete={handleDeleteTask}
            onToggle={handleToggleTask}
            onEdit={handleEditTask} 
          />
        ))}
      </div>
    </div>
  );
};

export default App;
