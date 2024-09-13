import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo, updateJist } from '../actions';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const [showJist, setShowJist] = useState(false);
  const [isEditingJist, setIsEditingJist] = useState(false);
  const [jistValue, setJistValue] = useState(todo.jist || '');

  const isOverdue = todo.dueDate && new Date(todo.dueDate) < new Date() && !todo.completed;
  const dueDateStyle = isOverdue ? { color: 'red' } : { color: 'green' };


  const handleUpdateJist = () => {
    dispatch(updateJist(todo.id, jistValue));
    setIsEditingJist(false);
  };

  return (
    <li className={`list-group-item ${todo.completed ? 'list-group-item-success' : ''}`}>
      <div>
        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          {todo.text}
        </span>
        <div>
          <button className="btn btn-outline-success btn-sm" onClick={() => dispatch(toggleTodo(todo.id))}>
            {todo.completed ? 'Uncomplete' : 'Complete'}
          </button>
          <button className="btn btn-outline-danger btn-sm" onClick={() => dispatch(deleteTodo(todo.id))}>
            Delete
          </button>
          <button className="btn btn-outline-info btn-sm" onClick={() => setShowJist(!showJist)}>
            {showJist ? 'Hide Jist' : 'Show Jist'}
          </button>
        </div>
      </div>

      {/* Due Date Section */}
      {todo.dueDate && (
        <div style={dueDateStyle}>
          Due: {new Date(todo.dueDate).toLocaleDateString()} 
          {isOverdue && <strong> (Overdue)</strong>} {/* Show "Overdue" if the task is past the due date */}
        </div>
      )}

      {showJist && (
        <div style={{ marginTop: '10px' }}>
          {isEditingJist ? (
            <div>
              <textarea
                value={jistValue}
                onChange={(e) => setJistValue(e.target.value)}
                rows="3"
                className="form-control"
              />
              <button className="btn btn-success btn-sm" onClick={handleUpdateJist}>Save</button>
              <button className="btn btn-secondary btn-sm" onClick={() => setIsEditingJist(false)}>Cancel</button>
            </div>
          ) : (
            <div>
              <p>{todo.jist || 'No Jist available'}</p>
              <button className="btn btn-warning btn-sm" onClick={() => setIsEditingJist(true)}>Edit Jist</button>
            </div>
          )}
        </div>
      )}
    </li>
  );
};

export default TodoItem;
