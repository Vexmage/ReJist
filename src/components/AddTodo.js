import React, { useState } from 'react';

const AddTodo = ({ todos, setTodos }) => {
  const [text, setText] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      const newTodo = {
        id: Date.now(), // Unique ID based on current time
        text,
        dueDate,
        completed: false,
      };
      setTodos([...todos, newTodo]); // Add the new task to the todos list
      setText('');
      setDueDate('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Add a new to-do"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="input-group mb-3">
        <input
          type="date"
          className="form-control"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}  // Date picker
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
