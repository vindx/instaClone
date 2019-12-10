import React from 'react';
import PropTypes from 'proptypes';

import {
  getLikesStatusActionCreator,
  loginCheckActionCreator,
  updateLoginInfoActionCreator,
} from '../../redux/actions';
import LogInPage from './LogInPage';
import StoreContext from '../../StoreContext';

const LogInPageContainer = props => {
  const { signUpUrl } = props;

  return (
    <StoreContext.Consumer>
      {store => {
        const onInputChange = ({ emailOrUserName, password }) => {
          store.dispatch(updateLoginInfoActionCreator({ emailOrUserName, password }));
        };

        const logIn = emailOrUserName => {
          store.dispatch(loginCheckActionCreator());
          localStorage.activeUser = JSON.stringify(emailOrUserName);
          store.dispatch(getLikesStatusActionCreator());
        };
        return (
          <LogInPage
            loginUser={store.getState().state.users.loginUser}
            loginCheck={store.getState().state.users.loginCheck}
            signUpUrl={signUpUrl}
            onInputChange={onInputChange}
            logIn={logIn}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

LogInPageContainer.propTypes = {
  signUpUrl: PropTypes.string.isRequired,
};

export default LogInPageContainer;
