import React from 'react';
import { Route } from 'react-router-dom';

import SignUpView from './views/SignUpView';
import LogInView from './views/LogInView';

const SignUpOrLogInPage = () => (
  <>
    <Route exact path="/signup123" component={SignUpView} />
    <Route exact path="/login123" component={LogInView} />
  </>
);

export default SignUpOrLogInPage;
