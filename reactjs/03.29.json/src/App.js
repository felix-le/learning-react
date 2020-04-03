import React from 'react';
import CallApiTwo from './features/CallApi/'
// import './App.css';
import './css/style.css';
import DetailItem from './features/DetailItem';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { createBrowserHistory } from 'history';
function App() {


  return (
    <Router history={createBrowserHistory()}>
      <div className="App">
        <div className="container">

          <ul className="list-page">
            <li>
              <Link to="/detail-item">Detail Item</Link>
            </li>
            <li>
              <Link to="/call-api">Call Api</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/detail-item/:id" component={DetailItem} />
            <Route path="/call-api" component={CallApiTwo} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
