import PropTypes from 'prop-types';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const RouteWithLayout = ({
  layout: Layout,
  component: Component,
  currentUser,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(matchProps) => {
        return currentUser ? (
          <Layout>
            <Component token={currentUser.token} {...matchProps} />
          </Layout>
        ) : (
          <Redirect to='/sign-in' />
        );
      }}
    />
  );
};

RouteWithLayout.propTypes = {
  component: PropTypes.any.isRequired,
  layout: PropTypes.any.isRequired,
  path: PropTypes.string,
};

export default RouteWithLayout;
