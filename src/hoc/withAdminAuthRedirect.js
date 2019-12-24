import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const mapStateToProps = state => ({
  activeUser: state.auth.activeUser,
});

const withAdminAuthRedirect = Component => {
  const AuthRedirectedComponent = props => {
    if (props.activeUser === 'admin') return <Redirect to="/admin" />;
    return <Component {...props} />;
  };
  return connect(mapStateToProps)(AuthRedirectedComponent);
};

export default withAdminAuthRedirect;
