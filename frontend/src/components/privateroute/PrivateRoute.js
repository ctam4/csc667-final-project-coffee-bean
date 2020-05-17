import React from 'react';

import { Route, Redirect } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [cookies] = useCookies(['isLoggedIn']);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (cookies.isLoggedIn) {
          return <Component {...props} />;
        }
        return <Redirect to={{ pathname: '/login' }} />;
      }}
    />
  );
};

export default PrivateRoute;
