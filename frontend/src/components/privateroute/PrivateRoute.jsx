import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import PropTypes from 'prop-types';
import Axios from 'axios';

import { Route, Redirect } from 'react-router-dom';

import apiUrl from '../../../api';

const PrivateRoute = ({ component: Component, type, ...rest }) => {
  const [cookies, setCookie] = useCookies(['token', 'role']);

  useEffect(() => {
    if (cookies.token !== undefined && cookies.role === undefined) {
      getRole();
    }
  }, []);

  const getRole = async () => {
    try {
      const response = await Axios.get(`${apiUrl}auth?token=${cookies.token}`);
      if (response.status === 200) {
        setCookie('role', response.data.role);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Route
      {...rest}
      render={(props) => {
        if (
          cookies.role === 'buyer'
          && type === 'buyer'
        ) {
          return <Component {...props} />;
        } else if (
          cookies.role === 'seller'
          && type === 'seller'
        ) {
          return <Component {...props} />;
        }
        return <Redirect to="/login" />;
      }}
    />
  );
};

PrivateRoute.defaultProps = {
  component: {},
  type: '',
};

PrivateRoute.propTypes = {
  component: PropTypes.element.isRequired,
  type: PropTypes.string.isRequired,
};

export default PrivateRoute;
