import React, { Component } from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      
        <Router>
          <div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/login">Login/Register</Link></li>
            </ul>
          

          <hr/>

          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          </div>
        </Router>
        
      </div>
    );
  }
}

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const Login = () => (
  <div>
    <h3>Register</h3>
    <form>
      <input type="text" placeholder="Name"/>
      <input type="text" placeholder="Password"/>
    </form>
    <h3>Login</h3>
    <form>
      <input type="text" placeholder="Name"/>
      <input type="text" placeholder="Password"/>
    </form>
  </div>
)

export default App;
