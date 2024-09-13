import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
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
        <h1 style={headerStyle}>ReJist</h1> {/* Apply the header style */}
      </header>
      <main>
        <AddTodo />
        <TodoList />
      </main>
    </div>
  );
}

export default App;
