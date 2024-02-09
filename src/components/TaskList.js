import React, { useState } from 'react';

const TaskList = ({ task, onDelete, onToggle, onEdit }) => {
  const [editing, setEditing] = useState(false);
  const [editedName, setEditedName] = useState(task.name);

  const handleEdit = () => {
    if (editedName.trim() !== '') {
      onEdit(task.id, editedName);
      setEditing(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleEdit();
    }
  };

  const handleIncompleteClick = () => {
    onToggle(task.id);
  };

  const handleDeleteClick = () => {
    onDelete(task.id);
  };

  return (
    <div className="p-4 mb-4 border rounded shadow">
      <div className="flex justify-between items-center">
        {editing ? (
          <input
            type="text"
            className="w-full px-3 py-2 border rounded"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
            onBlur={handleEdit}
            onKeyPress={handleKeyPress}
            autoFocus
          />
        ) : (
          <span
            className={`text-lg cursor-pointer ${task.completed ? 'line-through text-gray-500' : ''}`}
            onClick={() => setEditing(true)}
          >
            {task.name}
          </span>
        )}
        <div>
          <span
            className={`px-2 py-1 rounded cursor-pointer ${task.completed ? 'bg-green-500' : 'bg-gray-500'} text-white`}
            onClick={handleIncompleteClick}
          >
            {task.completed ? 'Completed' : 'Incomplete'}
          </span>
          <button
            onClick={handleDeleteClick}
            className="ml-2 px-2 py-1 rounded bg-red-500 hover:bg-red-600 text-white"
          >
            Delete
          </button>
        </div>
      </div>
      <p className="text-gray-600">Priority: {task.priority}</p>
    </div>
  );
};

export default TaskList;
