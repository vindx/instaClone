import React from 'react';
import PropTypes from 'proptypes';

import {
  createAccountActionCreator,
  getLikesStatusActionCreator,
  updateNewUserInfoActionCreator,
} from '../../redux/actions';
import SignUpPage from './SignUpPage';
import StoreContext from '../../StoreContext';

const SignUpPageContainer = props => {
  const { logInUrl } = props;

  return (
    <StoreContext.Consumer>
      {store => {
        const onInputChange = ({ email, fullName, userName, password }) => {
          store.dispatch(
            updateNewUserInfoActionCreator({
              email,
              fullName,
              userName,
              password,
            })
          );
        };

        const createNewAccount = userName => {
          store.dispatch(createAccountActionCreator());
          localStorage.activeUser = JSON.stringify(userName);
          store.dispatch(getLikesStatusActionCreator());
        };
        return (
          <SignUpPage
            newUser={store.getState().state.users.newUser}
            newUserCheck={store.getState().state.users.newUserCheck}
            logInUrl={logInUrl}
            onInputChange={onInputChange}
            createNewAccount={createNewAccount}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

SignUpPageContainer.propTypes = {
  logInUrl: PropTypes.string.isRequired,
};

export default SignUpPageContainer;
