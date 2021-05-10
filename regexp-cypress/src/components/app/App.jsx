import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from '../homepage/homePage'
import SandBoxPage from '../sandbox/sandBoxPage'

import './App.scss';

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route exact path='/sandbox'>
            <SandBoxPage />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
