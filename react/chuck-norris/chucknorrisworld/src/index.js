import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CelebrityJokes from './components/CelebrityJokes';
import FoodJokes from './components/FoodJokes';
import { Router, Route, browserHistory } from 'react-router';
import registerServiceWorker from './registerServiceWorker';

const Root = () => (
    <div className="container">
        <Router history={browserHistory}>
            <Route path="/" component={FoodJokes}/>
            <Route path="/special" component={CelebrityJokes}/>
        </Router>
    </div>
)

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
