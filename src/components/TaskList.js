import React from 'react';

const TaskList = ({ tasks, onToggleTaskStatus }) => {
  // Function to handle toggling task status
  const handleToggleStatus = (taskId) => {
    onToggleTaskStatus(taskId);
  };

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleStatus(task.id)}
            />
            <span>{task.name}</span>
            <span>Status: {task.completed ? 'Completed' : 'Incomplete'}</span>
            <span>Priority: {task.priority}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
