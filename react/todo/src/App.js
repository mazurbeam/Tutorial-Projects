import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const state = {
  item: [
    { id: 1, text: "Learn React", completed: true },
    { id: 2, text: "Build a todo app", completed: false },
    { id: 3, text: "Profit", completed: false }    
  ],
  filter: 'all',
  newTodoText: ''
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
