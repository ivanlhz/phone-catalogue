import React, { FC } from 'react';
import './App.css';
import {Home, NotFound, Details} from '../pages';
import {Router} from '@reach/router';

const App: FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Home path="/" />
          <Details path="phones/:phoneid" />
          <NotFound default />
        </Router>
      </header>
    </div>
  );
};

export default App;
