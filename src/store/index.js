import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import todosReducer from '../reducers/todosReducer';
import { thunk } from 'redux-thunk';


const store = createStore(
    todosReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );
  
  console.log(store.getState());  // Log the initial state

export default store;
