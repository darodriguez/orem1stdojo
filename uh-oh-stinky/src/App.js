import React from 'react';
import logo from './tenor.gif';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code></code> Hello There, General Kenobi, you are a bold one
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=FTrxDBDBOHU"
          target="_blank"
          rel="noopener noreferrer"
        >
         Hello There
        </a>
      </header>
    </div>
  );
}

export default App;
