import { connect } from 'react-redux';

import { deleteAccountActionCreator, logOutActionCreator } from '../../redux/actions';
import AdminPage from './AdminPage';

const mapStateToProps = state => ({
  users: state.state.users.existedUsers,
});

const mapDispatchToProps = dispatch => ({
  logOut: () => {
    dispatch(logOutActionCreator());
    localStorage.clear();
  },
  deleteUser: userName => {
    dispatch(deleteAccountActionCreator(userName));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);
