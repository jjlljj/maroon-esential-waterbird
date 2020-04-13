import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';

import View from '../View/View';

function Routes() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/view" component={View} />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Routes />
    </div>
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
          <Link to="/view">Navigation Link</Link>
        </p>
      </header>
    </div>
  );
}

export default App;
