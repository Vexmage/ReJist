import { createStore } from 'redux';
import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import todosReducer from '../reducers/todosReducer';
import thunk from 'redux-thunk';

const store = createStore(
  todosReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
