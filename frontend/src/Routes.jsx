import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignUp from './SignUp';
import LogIn from './LogIn';

const Routes = () => (
  <Switch>
    <Route path='/signup' exact component={SignUp} />
    <Route path='/login' exact component={LogIn} />
  </Switch>
);

export default Routes;
