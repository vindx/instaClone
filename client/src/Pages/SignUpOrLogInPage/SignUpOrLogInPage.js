import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import LogInViewContainer from './views/LogInViewContainer';
import SignUpViewContainer from './views/SignUpViewContainer';
import PageNotFound from '../../shares/components/PageNotFound/PageNotFound';
import withAdminAuthRedirect from '../../hoc/withAdminAuthRedirect';
import withUserAuthRedirect from '../../hoc/withUserAuthRedirect';

const SignUpOrLogInPage = props => {
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

export default compose(
  connect(mapStateToProps),
  withAdminAuthRedirect,
  withUserAuthRedirect
)(SignUpOrLogInPage);
