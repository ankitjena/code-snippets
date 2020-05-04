import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from '../containers/Landing';
import Home from '../containers/Home';

export default () => (
  <Router>
    <Switch>
      <Route exact path="/landing" component={Landing} />
      <Route exact path="/" component={Home} />
    </Switch>
  </Router>
);
