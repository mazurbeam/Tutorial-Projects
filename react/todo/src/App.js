import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
import fetch from 'isomorphic-fetch';


const list = {
  item: [
    { id: 1, text: "Learn React", completed: true },
    { id: 2, text: "Build a todo app", completed: false },
    { id: 3, text: "Profit", completed: false }    
  ],
  filter: 'all',
  newTodoText: ''
}

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      items: list.item,
      filter: 'all',
      newTodoText: ''
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmitTodo = this.onSubmitTodo.bind(this);
  }

  onInputChange(event) {
    this.setState({newTodoText: event.target.value});
  }

  onSubmitTodo(event) {
    const {newTodoText} = this.state;
    console.log(newTodoText)
    this.setState({
      items: [...this.state.items, {
        id: this.state.items.length+1,
        text: newTodoText,
        completed: false
      }],
      newTodoText: ''
    })
    console.log(this.state)
    
    event.preventDefault();
  }

  render() {
    const {
      newTodo,
      items,
    } = this.state

    return (
      <div className="App">
        <h1>My ToDo App</h1>
        <AddTodo
          value={newTodo}
          onChange={this.onInputChange}
          onSubmit={this.onSubmitTodo}
        >Add Item</AddTodo>
        <TodoList items={items}/>
      </div>
    );
  }
}

const AddTodo = ({
  value,
  onChange,
  onSubmit,
  children
}) =>
  <form onSubmit={onSubmit}>
    <input className="new-todo" type="text" value={value} onChange={onChange}/>
    <button type="submit">
      {children}
    </button>
  </form>



export default App;
