// Action Types
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const UPDATE_JIST = 'UPDATE_JIST';

// Action Creators
export const addTodo = (text, dueDate) => ({
  type: ADD_TODO,
  payload: { text, dueDate }
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: id,
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});

export const updateJist = (id, jist) => ({
    type: UPDATE_JIST,
    payload: { id, jist },
  });
