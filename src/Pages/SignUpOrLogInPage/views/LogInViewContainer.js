import React from 'react';
import { connect } from 'react-redux';

import UsersApi from '../../../serverApiParody/usersApi';
import { authIsFetching, authOnError, authOnSuccess } from '../../../redux/reducers/authReducer';
import LogInView from './LogInView';

const LogInViewContainer = props => {
  const { authIsFetching, authOnError, authOnSuccess } = props;
  const fetchToLogIn = ({ emailOrUserName, password }) => {
    authIsFetching();
    setTimeout(() => {
      UsersApi.getUserByLogInInfo({ emailOrUserName, password }).then(response => {
        if (response.responseCode === 200) {
          authOnSuccess(response.user);
        } else {
          authOnError(response.error);
        }
      });
    }, 1000);
  };
  return <LogInView authInfo={props.auth} logIn={fetchToLogIn} />;
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { authIsFetching, authOnError, authOnSuccess })(
  LogInViewContainer
);
