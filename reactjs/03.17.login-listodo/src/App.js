import React from 'react';
import './css/style.css';
import HomePage from './components/HomePage';
import toDoListPage from './components/toDoListPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { createBrowserHistory } from 'history';

function App() {
  return (

    <Router history={createBrowserHistory()}>
      <div className="App">
        <ul className="list-page">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>  
            <Link to="/login-page">login page</Link>
          </li>
          <li>  
            <Link to="/register-page">register page</Link>
          </li>
          <li>
            <Link to="/todo-list-page">To Do List Page page</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={HomePage} /> 
          <Route path="/login-page" component={LoginPage} />
          <Route path="/register-page" component={RegisterPage} />
          <Route path="/todo-list-page" component={toDoListPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
