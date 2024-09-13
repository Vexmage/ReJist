import React, { useState, useEffect } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { loadTodosFromLocalStorage, saveTodosToLocalStorage } from './storage/localStorage';

function App() {
  const [todos, setTodos] = useState(() => {
    // Load todos from localStorage when the app initializes
    return loadTodosFromLocalStorage();
  });

  // Save todos to localStorage whenever they change
  useEffect(() => {
    saveTodosToLocalStorage(todos);
  }, [todos]);

  const appStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL + '/background.jpg'})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column', // Stack elements vertically
    justifyContent: 'flex-start', // Align the content at the top
    alignItems: 'center', // Center horizontally
    padding: '20px',
  };

  const headerStyle = {
    color: '#fff',
    textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)',
    fontSize: '4rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '10px 20px',
    borderRadius: '10px',
    marginBottom: '40px', // Space below the header to prevent overlap
    marginTop: '20px', // Space above the header
  };

  return (
    <div style={appStyle} className="app-container">
      <header>
        <h1 style={headerStyle}>ReJist</h1>
      </header>
      <main>
        <AddTodo todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </main>
    </div>
  );
}

export default App;
