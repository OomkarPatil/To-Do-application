import React, { useState } from 'react'


const ToDoItem = ({ todo, toggleComplete, deleteToDo, editToDo }) => {

  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    editToDo(todo.id, editText);
    setIsEditing(false);
  };

  return (
    <div
      className={`flex items-center justify-between p-2 border rounded ${
        todo.completed ? "bg-green-100" : "bg-white"
      }`}
    >
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          className="flex-grow p-1 border rounded mr-2"
        />
      ) : (
        <span
          className={`flex-grow ${
            todo.completed ? "line-through text-gray-500" : ""
          }`}
        >
          {todo.text}
        </span>
      )}
      <div className="flex gap-2">
        {isEditing ? (
          <button
            onClick={handleEdit}
            className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
          >
            Edit
          </button>
        )}
        <button
          onClick={() => toggleComplete(todo.id)}
          className={`px-2 py-1 text-white rounded ${
            todo.completed ? "bg-gray-500 hover:bg-gray-600" : "bg-green-500 hover:bg-green-600"
          }`}
        >
          {todo.completed ? "Undo" : "Complete"}
        </button>
        <button
          onClick={() => deleteToDo(todo.id)}
          className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ToDoItem