import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import { useCookies } from 'react-cookie';
import Axios from 'axios';
import apiUrl from '../../../api';

const PrivateRoute = ({ component: Component, type, ...rest }) => {
  const [cookies, setCookie] = useCookies(['isLoggedIn', 'token', 'role']);
  useEffect(() => {
    getRole();
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
          cookies.isLoggedIn
          && cookies.role === 'buyer'
          && type === 'buyer'
        ) {
          return <Component {...props} />;
        }
        if (
          cookies.isLoggedIn
          && cookies.role === 'seller'
          && type === 'seller'
        ) {
          return <Component {...props} />;
        }
        return <Redirect to={{ pathname: '/login' }} />;
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
