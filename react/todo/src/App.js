import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
    }
  }

  render() {
    return (
      <div className="App">
        <h1>My ToDo App</h1>
        <AddTodo>Add Item</AddTodo>
        <TodoList items={this.state.items}/>
      </div>
    );
  }
}

const AddTodo = ({
  value,
  onSubmit,
  children
}) =>
  <form>
    <input type="text" value={value}/>
    <button type="submit">
      {children}
    </button>
  </form>

class TodoList extends Component {
  constructor(props) {
    super(props);

    
  }
  render() {
    const {
      items
    } = this.props;
    return (
      <div className="todo-list">
      {items.map(item => 
        <div key={item.id} className="list-item">
          <span>{item.text}</span>
        </div>
      )}
      </div>   
    )
  }
}

export default App;
