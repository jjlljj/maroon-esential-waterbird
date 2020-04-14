import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';

import Board from '../Board/Board';

function App() {
  return (
    <Board />
  );
}

function Home(props) {
  return (
    <div>
      <header className="App-header">
        <p>
          React Boilerplate | James Logue |{' '}
          <a
            style={{ color: '#f2f2f2' }}
            href="https://github.com/jjlljj/react-boilerplate"
            target="_blank"
          >
            github.com/jjlljj/react-boilerplate
          </a>
        </p>
        <p>
        </p>
      </header>
    </div>
  );
}

export default App;
