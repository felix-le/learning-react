import React from 'react';
import LoginPage from './components/LoginPage';
import ListToDoPage from './components/ListToDoPage';
import HomePage from './components/HomePage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
    <Router>
      <div className="container">
        <ul className="list-page">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login-page">Login</Link></li>
          <li> <Link to="/list-to-do">List To Do</Link></li>
        </ul>

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/login-page"> 
            <LoginPage />
          </Route>
          <Route path="/list-to-do"> 
            <ListToDoPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;

// <Route exact path="/">
{/* <Home /> */}
