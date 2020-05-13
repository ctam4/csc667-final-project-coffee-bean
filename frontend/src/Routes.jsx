import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LogIn from './LogIn';

const Routes = () => (
  <Switch>
    <Route path='/login' exact component={LogIn} />
  </Switch>
);

export default Routes;
