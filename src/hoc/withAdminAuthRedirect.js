import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
});

const withAuthRedirect = Component => {
  const AuthRedirectedComponent = props => {
    if (!props.isAuth) return <Redirect to="/accounts/signup" />;
    return <Component {...props} />;
  };
  return connect(mapStateToProps)(AuthRedirectedComponent);
};

export default withAuthRedirect;
