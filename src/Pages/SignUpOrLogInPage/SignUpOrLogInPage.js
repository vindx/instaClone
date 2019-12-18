import React from 'react';
import { Route } from 'react-router-dom';

import LogInViewContainer from './views/LogInViewContainer';
import SignUpViewContainer from './views/SignUpViewContainer';

const SignUpOrLogInPage = () => (
  <>
    <Route exact path="/signup123" component={SignUpViewContainer} />
    <Route exact path="/login123" component={LogInViewContainer} />
  </>
);

export default SignUpOrLogInPage;
