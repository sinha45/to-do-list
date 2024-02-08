import React, { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState('');

  // Function to handle task name input change
  const handleInputChange = (event) => {
    setTaskName(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    if (!taskName.trim()) return; // Ignore empty task names
    onAddTask({ name: taskName }); // Pass new task to parent component
    setTaskName(''); // Clear input field after adding task
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow">
      <input
        type="text"
        value={taskName}
        onChange={handleInputChange}
        className="w-full mb-2 px-3 py-2 border rounded"
        placeholder="Enter task name"
      />
      <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded">Add Task</button>
    </form>
  );
};

export default TaskForm;
