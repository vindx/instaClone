import React from 'react';
import { connect } from 'react-redux';

import AdminPage from './AdminPage';
import { getAllUsers, deleteUser } from '../../redux/reducers/usersReducer';

class AdminPageContainer extends React.Component {
  // use effect hook
  componentDidMount() {
    this.props.getAllUsers();
  }

  deleteUser = user => {
    this.props.deleteUser(user.id, user, user.userName);
  };

  render() {
    return (
      <AdminPage
        initIsFetching={this.props.initIsFetching}
        deletingIsFetching={this.props.deletingIsFetching}
        error={this.props.error}
        data={this.props.data}
        deleteUser={this.deleteUser}
      />
    );
  }
}
const mapStateToProps = state => ({
  initIsFetching: state.users.initIsFetching,
  deletingIsFetching: state.users.deletingIsFetching,
  error: state.users.error,
  data: state.users.data,
});

export default connect(mapStateToProps, { getAllUsers, deleteUser })(AdminPageContainer);
