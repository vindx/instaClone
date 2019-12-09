import React from 'react';

import {
  createAccountActionCreator,
  getLikesStatusActionCreator,
  updateNewUserInfoActionCreator,
} from '../../redux/actions';
import SignUpPage from './SignUpPage';

const SignUpPageContainer = props => {
  const { logInUrl, state, dispatch } = props;

  const onInputChange = ({ email, fullName, userName, password }) => {
    dispatch(
      updateNewUserInfoActionCreator({
        email,
        fullName,
        userName,
        password,
      })
    );
  };

  const createNewAccount = userName => {
    dispatch(createAccountActionCreator());
    localStorage.activeUser = JSON.stringify(userName);
    dispatch(getLikesStatusActionCreator());
  };

  return (
    <SignUpPage
      newUser={state.users.newUser}
      newUserCheck={state.users.newUserCheck}
      logInUrl={logInUrl}
      onInputChange={onInputChange}
      createNewAccount={createNewAccount}
    />
  );
};
//
// SignUpPage.propTypes = {
//   newUser: PropTypes.shape({
//     email: PropTypes.string.isRequired,
//     fullName: PropTypes.string.isRequired,
//     password: PropTypes.string.isRequired,
//     userName: PropTypes.string.isRequired,
//   }).isRequired,
//   newUserCheck: PropTypes.shape({}).isRequired,
//   logInUrl: PropTypes.string.isRequired,
//   dispatch: PropTypes.func.isRequired,
// };

export default SignUpPageContainer;
