import React, { useState } from 'react';
import TaskForm from './components/TaskForm';

const App = () => {
  const [tasks, setTasks] = useState([]);

  // Function to add a new task
  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    
      <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-12 mt-36 text-center text-emerald-400">Todo List</h1>

      {/* Task Form component for adding new tasks */}
      <TaskForm onAddTask={handleAddTask} />
    </div>
  );
};

export default App;
