import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from './components/privateroute/PrivateRoute';
import SignUp from './SignUp';
import LogIn from './LogIn';
import Menu from './Menu';
import Home from './Home';
import OrdersList from './OrdersList';
import SingleOrder from './SingleOrder';
import CheckOut from './CheckOut';

// when rendering seller route add seller type to the privateroute

const Routes = () => (
  <Switch>
    <Route path='/' exact component={Home} />
    <Route path='/signup' exact component={SignUp} />
    <Route path='/login' exact component={LogIn} />
    <Route path='/menu' exact component={Menu} />
    <PrivateRoute
      path='/order-history'
      exact
      component={OrdersList}
      type='buyer'
    />
    <PrivateRoute
      path='/order-history/:id'
      exact
      component={SingleOrder}
      type='buyer'
    />
    <Route path='/checkout' exact component={CheckOut} />
  </Switch>
);

export default Routes;
