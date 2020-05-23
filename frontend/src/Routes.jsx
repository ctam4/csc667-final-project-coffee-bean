import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from './components/privateroute/PrivateRoute';
import SignUp from './SignUp';
import LogIn from './LogIn';
import Menu from './Menu';
import Home from './Home';
import SingleProduct from './SingleProduct';
import OrderHistory from './OrderHistory';
import SingleOrder from './SingleOrder';
import CheckOut from './CheckOut';
import Inventory from './Inventory';

// when rendering seller route add seller type to the privateroute

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/signup" exact component={SignUp} />
    <Route path="/login" exact component={LogIn} />
    <Route path="/menu" exact component={Menu} />
    <Route path="/menu/:productId" component={SingleProduct} />
    <PrivateRoute
      path="/order-history"
      exact
      component={OrderHistory}
      type="buyer"
    />
    <PrivateRoute
      path="/order-history/:orderId"
      exact
      component={SingleOrder}
      type="buyer"
    />
    <PrivateRoute
      path="/checkout"
      exact
      component={CheckOut}
      type="buyer"
    />
    <PrivateRoute
      path="/inventory"
      exact
      component={Inventory}
      type="seller"
    />
  </Switch>
);

export default Routes;
