import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, UPDATE_JIST } from '../actions';

const initialState = {
  todos: []
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            text: action.payload.text,
            completed: false,
            jist: '',
            dueDate: action.payload.dueDate // Correctly store the dueDate
          }
        ]
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
        )
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    case UPDATE_JIST:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id ? { ...todo, jist: action.payload.jist } : todo
        )
      };
    default:
      return state;
  }
};

export default todosReducer;
