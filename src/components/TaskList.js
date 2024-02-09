
import React from 'react';

const TaskList = ({ tasks }) => {
  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
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
