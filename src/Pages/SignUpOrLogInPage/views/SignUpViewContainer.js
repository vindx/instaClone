import React from 'react';
import { connect } from 'react-redux';

import UsersApi from '../../../serverApiParody/usersApi';
import { authIsFetching, authOnError, authOnSuccess } from '../../../redux/reducers/authReducer';
import SignUpView from './SignUpView';

const SingUpViewContainer = props => {
  const { authIsFetching, authOnError, authOnSuccess } = props;
  const fetchToSignUp = ({ email, fullName, userName, password }) => {
    authIsFetching();
    setTimeout(() => {
      UsersApi.createUser({ email, fullName, userName, password }).then(response => {
        if (response.responseCode === 200) {
          authOnSuccess(response.user);
        } else {
          authOnError(response.error);
        }
      });
    }, 1000);
  };
  return <SignUpView authInfo={props.auth} createNewAccount={fetchToSignUp} />;
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { authIsFetching, authOnError, authOnSuccess })(
  SingUpViewContainer
);
