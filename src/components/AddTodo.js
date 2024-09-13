import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../actions';

const AddTodo = () => {
  const [text, setText] = useState('');
  const [dueDate, setDueDate] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo(text, dueDate));
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
