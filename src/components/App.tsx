import React, { FC } from 'react';
import './App.css';
import Home from '../pages/Home';


const App: FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Home />
      </header>
    </div>
  );
}

export default App;
