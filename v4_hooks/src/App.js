import React from 'react';
import logo from './logo.svg';
import './App.css';
import NameWidth from './NameWidth';
const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <NameWidth />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
