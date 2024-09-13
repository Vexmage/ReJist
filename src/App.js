import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Redux To-Do App</h1>
      </header>
      <main>
        <AddTodo />
        <TodoList />
      </main>
    </div>
  );
}

export default App;
