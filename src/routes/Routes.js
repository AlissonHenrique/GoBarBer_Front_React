import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import AuthLayout from '../pages/_Layouts/auth';
import DefaultLayout from '../pages/_Layouts/default';

export default function RouterWrapper({
  component: Component,
  isPrivate = false,
  ...rest
}) {
  const signed = false;
  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }
  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }
  return <Route {...rest} component={Component} />;
}

RouterWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};
RouterWrapper.defaultProps = {
  isPrivate: false,
};
