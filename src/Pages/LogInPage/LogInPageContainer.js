import React from 'react';

import {
  getLikesStatusActionCreator,
  loginCheckActionCreator,
  updateLoginInfoActionCreator,
} from '../../redux/actions';
import LogInPage from './LogInPage';

const LogInPageContainer = props => {
  const { signUpUrl, state, dispatch } = props;

  const onInputChange = ({ emailOrUserName, password }) => {
    dispatch(updateLoginInfoActionCreator({ emailOrUserName, password }));
  };

  const logIn = emailOrUserName => {
    dispatch(loginCheckActionCreator());
    localStorage.activeUser = JSON.stringify(emailOrUserName);
    dispatch(getLikesStatusActionCreator());
  };

  return (
    <LogInPage
      loginUser={state.users.loginUser}
      loginCheck={state.users.loginCheck}
      signUpUrl={signUpUrl}
      onInputChange={onInputChange}
      logIn={logIn}
    />
  );
};

export default LogInPageContainer;
