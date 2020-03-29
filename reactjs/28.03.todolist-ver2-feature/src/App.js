import React from 'react';
import './css/style.css';
import HomePage from './features/HomePage';
import Todo from './features/Todo';
// import Register from './features/Register'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { createBrowserHistory } from 'history';
import ConditionalRendering from './features/ConditionalRendering/ConditionalRendering';

function App() {

  return (
    <Router history={createBrowserHistory()}>
      <div className="App">
     
        <h1>this is app page</h1>
        <ul className="list-page">
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <Link to="/conditional-rendering">Conditional Rendering</Link>
          </li>
          {/* <li>
            <Link to="/todo">Todo with features</Link>
          </li>
          <li>
            <Link to="/register-page">Register</Link>
          </li> */}
        </ul>
        <Switch>
          <Route path="/conditional-rendering" component={ConditionalRendering} />
          <Route exact path="/" component={HomePage} />
          <Route path="/todo" component={Todo} /> 
          {/* <Route path="/register-page" component={Register} /> */}
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
