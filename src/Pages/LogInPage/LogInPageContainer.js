import { connect } from 'react-redux';

import {
  getLikesStatusActionCreator,
  loginCheckActionCreator,
  updateLoginInfoActionCreator,
} from '../../redux/actions';
import LogInPage from './LogInPage';

const mapStateToProps = state => ({
  loginUser: state.state.users.loginUser,
  loginCheck: state.state.users.loginCheck,
});

const mapDispatchToProps = dispatch => ({
  onInputChange: ({ emailOrUserName, password }) => {
    dispatch(updateLoginInfoActionCreator({ emailOrUserName, password }));
  },
  logIn: emailOrUserName => {
    dispatch(loginCheckActionCreator());
    localStorage.activeUser = JSON.stringify(emailOrUserName);
    dispatch(getLikesStatusActionCreator());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LogInPage);
