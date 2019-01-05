import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import UsingIndex from './components/UsingIndex';
import UsingId from './components/UsingId';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Fragment>
            <nav>
              <ul>
                <li><Link to="using-id">List with key: ID</Link></li>
                <li><Link to="/using-index">List with key: Index</Link></li>
              </ul>
            </nav>
            <Switch>
              <Route component={UsingIndex} path="/using-index"/>
              <Route component={UsingId} path="/using-id"/>
            </Switch>
          </Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
