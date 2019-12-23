import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import LogInViewContainer from './views/LogInViewContainer';
import SignUpViewContainer from './views/SignUpViewContainer';
import PageNotFound from '../../shares/components/PageNotFound/PageNotFound';

const SignUpOrLogInPage = props => {
  if (props.isAuth) return <Redirect to="/" />;
  if (props.match.params.action === 'signup' && props.match.isExact) {
    return <SignUpViewContainer />;
  }
  if (props.match.params.action === 'login' && props.match.isExact) {
    return <LogInViewContainer />;
  }
  return <PageNotFound />;
};

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps)(SignUpOrLogInPage);
