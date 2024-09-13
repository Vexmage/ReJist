import React, { useState } from 'react';

import TodoItem from './TodoItem';


const TodoList = ({ todos, setTodos }) => {
  const [isSorted, setIsSorted] = useState(false); // State to control sorting

  if (!todos || todos.length === 0) {
    return <p className="text-center">No todos available</p>;
  }

  // Function to handle sorting
  const sortTodos = () => {
    setIsSorted(!isSorted); // Toggle sorting state
  };

  // Sort todos by due date (earliest first) when sorting is enabled
  const displayedTodos = isSorted
    ? [...todos].sort((a, b) => {
        if (!a.dueDate) return 1;  // Tasks without due dates go to the bottom
        if (!b.dueDate) return -1;
        return new Date(a.dueDate) - new Date(b.dueDate);
      })
    : todos;  // Display unsorted todos if sorting is not enabled

  return (
    <div>
      <button className="btn btn-primary mb-3" onClick={sortTodos}>
        {isSorted ? 'Unsort Todos' : 'Sort by Due Date'}
      </button>
      <ul className="list-group">
        {displayedTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} setTodos={setTodos} />
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
