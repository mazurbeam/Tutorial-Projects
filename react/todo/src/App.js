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

  updateTodo(id, status) {
    const items = this.state;
    const isId = item => item.id === id;
    const updatedTodo = items.filter(isId);
    this.setState({})
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
        <div className="header">
        <h1>My ToDo App</h1>
        <AddTodo
          className="new-todo"
          value={newTodoText}
          onChange={this.onInputChange}
          onSubmit={this.onSubmitTodo}
        >Add Item</AddTodo>
        </div>
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
      placeholder="What need's to be done?"
      />
    <button type="submit">
      {children}
    </button>
  </form>



class TodoList extends Component {
    render() {
      const {
        items,
        filter,
        updateFilter,
        updateTodo,
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
        <div>
          <ul className="todo-list">
            {filteredItems.map(item => 
              <li key={item.id} className="list-item">
              {item.completed
              ? <input className="toggle" type="checkbox" 
                  onClick={() => updateTodo(item.id, false)}/>
                  : <input className="toggle" type="checkbox" 
                  onClick={() => updateTodo(item.id, true)}/>
              }
                
                <span><label>{item.text}</label></span>
              </li>
            )}
          </ul>
          

          <div className="footer">
          <ul className="filters">
            <li onClick={() => updateFilter('all') }>All</li>
            <li onClick={() => updateFilter('active') }>Active</li>
            <li onClick={() => updateFilter('completed') }>Completed</li>
          </ul>
          </div>
          
        </div>  
         
      )
    }
  }

export default App;
