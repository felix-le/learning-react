import React from 'react';
import './css/style.css';
import HomePage from './components/HomePage';
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
        <h1>hello</h1>
        <ul className="list-page">
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <Link to="/login-page">Login Page</Link>
          </li>
          <li>
            <Link to="/Register-Page">Register Page</Link>
          </li>
        </ul>
      <Switch>
        <Route exact path="/" component={HomePage} />
          <Route path="/login-page" component={LoginPage} />
          <Route path="/Register-Page" component={RegisterPage} />
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
