import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const mapStateToProps = state => ({
  activeUser: state.auth.data,
});

const withAdminAuthRedirect = Component => {
  const AuthRedirectedComponent = props => {
    if (props.activeUser && props.activeUser.role === 'user') return <Redirect to="/" />;
    return <Component {...props} />;
  };
  return connect(mapStateToProps)(AuthRedirectedComponent);
};

export default withAdminAuthRedirect;
