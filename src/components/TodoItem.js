import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../actions';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <li className={`list-group-item ${todo.completed ? 'list-group-item-success' : ''}`}>
      <span
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
      >
        {todo.text}
      </span>
      <div>
        <button className="btn btn-outline-success btn-sm" onClick={() => dispatch(toggleTodo(todo.id))}>
          {todo.completed ? 'Uncomplete' : 'Complete'}
        </button>
        <button className="btn btn-outline-danger btn-sm" onClick={() => dispatch(deleteTodo(todo.id))}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
