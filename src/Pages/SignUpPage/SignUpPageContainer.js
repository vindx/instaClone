import { connect } from 'react-redux';

import {
  createAccountActionCreator,
  getLikesStatusActionCreator,
  updateNewUserInfoActionCreator,
} from '../../redux/actions';
import SignUpPage from './SignUpPage';

const mapStateToProps = state => ({
  newUser: state.state.users.newUser,
  newUserCheck: state.state.users.newUserCheck,
});

const mapDispatchToProps = dispatch => ({
  onInputChange: ({ email, fullName, userName, password }) => {
    dispatch(
      updateNewUserInfoActionCreator({
        email,
        fullName,
        userName,
        password,
      })
    );
  },
  createNewAccount: userName => {
    dispatch(createAccountActionCreator());
    localStorage.activeUser = JSON.stringify(userName);
    dispatch(getLikesStatusActionCreator());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
