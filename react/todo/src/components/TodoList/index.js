import React, { Component } from 'react';

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
          <li key={item.id} className="list-item">
            <span>{item.text}</span>
          </li>
        )}
        </div>   
      )
    }
  }

  export default TodoList;