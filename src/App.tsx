import React, { FC } from 'react';
import './App.css';
import {Home, NotFound, Details} from './pages';
import {Router} from '@reach/router';

const App: FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Phone Catalogue</h1>
      </header>
        <Router>
          <Home path="/" />
          <Details path="phones/:phoneid" />
          <NotFound default />
        </Router>
    </div>
  );
};

export default App;
