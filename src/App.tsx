import React, { FC } from 'react';
import './App.css';
import {Home, NotFound, Details} from './pages';
import {Router, Link} from '@reach/router';

const App: FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/"><h1>Phone Catalogue</h1></Link>
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
