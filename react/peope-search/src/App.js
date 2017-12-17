import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
//import logo from './logo.svg';
import './App.css';

const PEOPLE = [
  {id: 1, name: 'Henry', city: 'Washington DC', industry: 'governemnt', hobbies: 'watching cable news', email: 'henry@henry.com'},
  {id: 2, name: 'Janel', city: 'Seattle', industry: 'IT', hobbies: 'hiking', email: 'janel@janel.com'},
  {id: 3, name: 'Charlie', city: 'Chicago', industry: 'tech', hobbies: 'watching cable news', email: 'charlie@charlie.com'},
  {id: 4, name: 'Dan', city: 'Washington DC', industry: 'governemnt', hobbies: 'watching cable news', email: 'henry@henry.com'},
  {id: 5, name: 'Paula', city: 'Washington DC', industry: 'governemnt', hobbies: 'watching cable news', email: 'henry@henry.com'},
  {id: 6, name: 'Dimitri', city: 'Washington DC', industry: 'governemnt', hobbies: 'watching cable news', email: 'henry@henry.com'}
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to People Search</h1>
        </header>
        <main>
          <FilterablePeopleTable people={PEOPLE} />
        </main>
      </div>
    );
  }
}

// ------- COMPONENTS ------

class SearchBar extends Component {
  render() {
    const {
      filterText,
      onSearchChange
    } = this.props;
    return (
      <form>
        <input 
          type="text" 
          placeholder="Search..." 
          value={filterText}
          onChange={onSearchChange}
        />
      </form>
    )
  }
}

class PeopleTable extends Component {
  render() {
    const {
      people,
      filterText
    } = this.props;

    const isSearched = filterText => person => 
      person.name.toLowerCase().includes(filterText.toLowerCase())

    return (
      <table>
        {people.filter(isSearched(filterText)).map(person =>
          <tr key={person.id}>{person.name}</tr>
        )}
      </table>
    )
  }
}

class FilterablePeopleTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      people: this.props.people,
    };

    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onSearchChange(event) {
    this.setState({filterText: event.target.value})
  }
  render() {
    return (
      <div>
        <SearchBar 
          filterText={this.state.filterText}
          onSearchChange={this.onSearchChange}
        />
        <PeopleTable 
          people={this.state.people}
          filterText={this.state.filterText}
        />
      </div>
    )
  }
}

export default App;
