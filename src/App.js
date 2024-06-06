import React from 'react';
import logo from './logo.svg';
import './App.css';
import ShoppingList from './components/shoppinglist'; // Ensure the component name matches the file name
import Tables from './components/tables';
import Cars from './components/cars';
import Essay from './components/essay';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Achola Gloria Fortunate <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <ShoppingList name="Groceries" />
      <Tables name="mytable" />
      <Cars name="mycars" />
      <Essay name="myessay" />
      
    </div>
  );
}

export default App;
