import React from 'react'
import Header from './Components/Header';
import ToDoList from './Components/ToDoList';
import { useState } from 'react';

const App = () => {
  const [toDos, setToDos] = useState([]);
  const [newToDo, setNewToDo] = useState("");

  const addToDo = () => {
    if (newToDo.trim()) {
      setToDos([
        ...toDos,
        { id: Date.now(), text: newToDo, completed: false },
      ]);
      setNewToDo("");
    }
  };

  const toggleComplete = (id) => {
    setToDos(
      toDos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteToDo = (id) => {
    setToDos(toDos.filter((todo) => todo.id !== id));
  };

  const editToDo = (id, newText) => {
    setToDos(
      toDos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };


  return(
  <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <Header />
      <div className="w-full max-w-md p-4">
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Add a new to-do"
            value={newToDo}
            onChange={(e) => setNewToDo(e.target.value)}
            className="flex-grow p-2 border rounded"
          />
          <button
            onClick={addToDo}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add
          </button>
        </div>
        <ToDoList
          toDos={toDos}
          toggleComplete={toggleComplete}
          deleteToDo={deleteToDo}
          editToDo={editToDo}
        />
      </div>
  </div>
  );
}

export default App