import React from 'react'
import ToDoItem from './ToDoItem';

const ToDoList = ({ toDos, toggleComplete, deleteToDo, editToDo }) => {
  return (
    <div className="mt-4">
      {toDos.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteToDo={deleteToDo}
          editToDo={editToDo}
        />
      ))}
    </div>
  );
}

export default ToDoList