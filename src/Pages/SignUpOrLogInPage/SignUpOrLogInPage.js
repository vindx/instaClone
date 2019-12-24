import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import LogInViewContainer from './views/LogInViewContainer';
import SignUpViewContainer from './views/SignUpViewContainer';
import PageNotFound from '../../shares/components/PageNotFound/PageNotFound';
import withAdminAuthRedirect from '../../hoc/withAdminAuthRedirect';

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

export default compose(connect(mapStateToProps), withAdminAuthRedirect)(SignUpOrLogInPage);
