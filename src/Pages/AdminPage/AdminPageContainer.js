import React from 'react';
import { connect } from 'react-redux';

import AdminPage from './AdminPage';
import UsersApi from '../../serverApiParody/usersApi';
import PostsApi from '../../serverApiParody/postsApi';
import {
  usersFetchingOnProgress,
  usersFetchingOnError,
  usersFetchingOnSuccess,
  deleteUserFetchingOnProgress,
  deleteUserFetchingOnSuccess,
} from '../../redux/reducers/usersReducer';

class AdminPageContainer extends React.Component {
  // use effect hook
  componentDidMount() {
    this.props.usersFetchingOnProgress();
    setTimeout(() => {
      UsersApi.getAllUsers().then(response => {
        if (response.responseCode === 200) {
          this.props.usersFetchingOnSuccess(response.users, response.totalCount);
        } else {
          this.props.usersFetchingOnError(response.error);
        }
      });
    }, 1000);
  }

  deleteUser = user => {
    this.props.deleteUserFetchingOnProgress();
    setTimeout(() => {
      Promise.all([UsersApi.deleteUser(user.id), PostsApi.deleteAccount(user.userName)]).then(
        response =>
          response.every(obj => obj.responseCode === 200) &&
          this.props.deleteUserFetchingOnSuccess(response[0].users, response[0].totalCount)
      );
    }, 1000);
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

export default connect(mapStateToProps, {
  usersFetchingOnProgress,
  usersFetchingOnError,
  usersFetchingOnSuccess,
  deleteUserFetchingOnProgress,
  deleteUserFetchingOnSuccess,
})(AdminPageContainer);
