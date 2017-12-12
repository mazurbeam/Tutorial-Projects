import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import TodoList from './components/TodoList';
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
    this.updateFilter = this.updateFilter.bind(this);
    
  }

  updateFilter(filter) {
    this.setState({
      filter: filter
    })
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
      newTodoText,
      items,
      filter
    } = this.state

    return (
      <div className="App">
        <h1>My ToDo App</h1>
        <AddTodo
          value={newTodoText}
          onChange={this.onInputChange}
          onSubmit={this.onSubmitTodo}
        >Add Item</AddTodo>
        <TodoList items={items} filter={filter} updateFilter={this.updateFilter}/>
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
    <input 
      className="new-todo" 
      type="text" 
      value={value} 
      onChange={onChange} 
      />
    <button type="submit">
      {children}
    </button>
  </form>

const Button = ({onClick, className, children}) =>
  <button 
  onClick = {onClick}
  className = {className}
  type = "button"
  > 
  {children}
  </button>


class TodoList extends Component {
    constructor(props) {
      super(props);

    }

    

    render() {
      const {
        items,
        filter,
        updateFilter
      } = this.props;

      const filterItems = (item) => {
        console.log('running filterItems')
        if(filter === 'all'){
          return true;
        } else if(filter==='active') {
          return !item.completed;
        } else if(filter === 'completed') {
          return item.completed;
        }
      }

      const filteredItems = items.filter(filterItems);
      return (
        <div className="todo-list">
          
          {filteredItems.map(item => 
            <li key={item.id} className="list-item">
              <span>{item.text}</span>
            </li>
          )}

          <div className="filters">
            <Button onClick={() => updateFilter('all') }>All</Button>
            <Button onClick={() => updateFilter('active') }>Active</Button>
            <Button onClick={() => updateFilter('completed') }>Completed</Button>
          </div>
        </div>  
         
      )
    }
  }

export default App;
