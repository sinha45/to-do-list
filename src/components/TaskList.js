import React from 'react';
import { useState } from 'react';

const TaskList = ({ tasks, onToggleTaskStatus, onEditTaskName }) => {
    const [editedTaskName, setEditedTaskName] = useState('');
  
    // Function to handle toggling task status
    const handleToggleStatus = (taskId) => {
      onToggleTaskStatus(taskId);
    };
  const handleEditTaskName = (taskId, newName) => {
    onEditTaskName(taskId, newName);
    setEditedTaskName('');
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
            <span
              contentEditable={true}
              suppressContentEditableWarning={true}
              onBlur={(e) => handleEditTaskName(task.id, e.target.textContent)}
            >
              {task.name}
            </span>
            <span>Status: {task.completed ? 'Completed' : 'Incomplete'}</span>
            <span>Priority: {task.priority}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;