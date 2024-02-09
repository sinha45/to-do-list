// App.js
import React, { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([]);

  // Function to add a new task
  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  // Function to toggle task status
  const handleToggleTaskStatus = (taskId) => {
    console.log("Toggling task status for task ID:", taskId);
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    console.log("Updated tasks:", updatedTasks);
    setTasks(updatedTasks);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Todo List</h1>
      {/* Task Form component for adding new tasks */}
      <TaskForm onAddTask={handleAddTask} />

      {/* Display the list of tasks */}
      <TaskList tasks={tasks} onToggleTaskStatus={handleToggleTaskStatus} />
    </div>
  );
};

export default App;
