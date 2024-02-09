import React, { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState('');
  const [priority, setPriority] = useState('Low');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName.trim()) return;
    onAddTask({ name: taskName, priority, completed: false });
    setTaskName('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow">
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        className="w-full mb-2 px-3 py-2 border rounded"
        placeholder="Task Name"
        required
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="w-full mb-2 px-3 py-2 border rounded"
        required
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
