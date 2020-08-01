import React, { FC } from 'react';
import './App.css';
import {Home, NotFound} from '../pages';
import {Router} from '@reach/router';

const App: FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Home path="/" />
          <NotFound default />
        </Router>
      </header>
    </div>
  );
};

export default App;
