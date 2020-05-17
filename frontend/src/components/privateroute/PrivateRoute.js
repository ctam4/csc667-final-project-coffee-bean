import React from 'react';
import PropTypes from 'prop-types';
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

PrivateRoute.defaultProps = {
  component: {},
};

PrivateRoute.propTypes = {
  component: PropTypes.element,
};

export default PrivateRoute;
