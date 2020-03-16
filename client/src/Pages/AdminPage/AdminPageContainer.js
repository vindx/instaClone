import { compose } from 'redux';
import { connect } from 'react-redux';

import withAuthRedirect from '../../hoc/withAuthRedirect';
import withUserAuthRedirect from '../../hoc/withUserAuthRedirect';
import { getAllUsers, deleteUser } from '../../redux/actions/usersActions';
import AdminPage from './AdminPage';

const mapStateToProps = state => ({
  initIsFetching: state.users.initIsFetching,
  deletingIsFetching: state.users.deletingIsFetching,
  error: state.users.error,
  data: state.users.data,
});

export default compose(
  connect(mapStateToProps, { getAllUsers, deleteUser }),
  withUserAuthRedirect,
  withAuthRedirect
)(AdminPage);
