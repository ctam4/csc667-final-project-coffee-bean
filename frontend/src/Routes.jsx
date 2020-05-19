import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignUp from './SignUp';
import LogIn from './LogIn';
import Menu from './Menu';
import Home from './Home';
import CheckOut from './CheckOut';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/signup" exact component={SignUp} />
    <Route path="/login" exact component={LogIn} />
    <Route path="/menu" exact component={Menu} />
    <Route path="/checkout" exact component={CheckOut} />
  </Switch>
);

export default Routes;
