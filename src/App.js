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

  const handleToggleTaskStatus = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleEditTaskName = (taskId, newName) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, name: newName };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Todo List</h1>
      {/* Task Form component for adding new tasks */}
      <TaskForm onAddTask={handleAddTask} />

      {/* Display the list of tasks */}
      <TaskList
        tasks={tasks}
        onToggleTaskStatus={handleToggleTaskStatus}
        onEditTaskName={handleEditTaskName}
      />
    </div>
  );
};

export default App;
