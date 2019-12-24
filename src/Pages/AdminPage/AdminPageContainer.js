import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import AdminPage from './AdminPage';
import { getAllUsers, deleteUser } from '../../redux/reducers/usersReducer';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import BigPreloader from '../../shares/components/Preloaders/BigPreloader/BigPreloader';

class AdminPageContainer extends React.Component {
  // use effect hook
  componentDidMount() {
    if (this.props.activeUser === 'admin') {
      this.props.getAllUsers();
    }
  }

  deleteUser = user => {
    this.props.deleteUser(user.id, user, user.userName);
  };

  render() {
    if (this.props.activeUser !== 'admin') return <Redirect to="/" />;
    if (this.props.initIsFetching) return <BigPreloader />;
    return (
      <AdminPage
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
  activeUser: state.auth.activeUser,
});

export default compose(
  connect(mapStateToProps, { getAllUsers, deleteUser }),
  withAuthRedirect
)(AdminPageContainer);
