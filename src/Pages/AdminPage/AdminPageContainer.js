import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import AdminPage from './AdminPage';
import { getAllUsers, deleteUser } from '../../redux/reducers/usersReducer';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import BigPreloader from '../../shares/components/Preloaders/BigPreloader/BigPreloader';

const AdminPageContainer = props => {
  useEffect(() => {
    props.getAllUsers();
  }, [props.getAllUsers]);

  const deleteAccount = userId => {
    props.deleteUser(userId);
  };

  if (props.activeUser && props.activeUser.role !== 'admin') return <Redirect to="/" />;
  if (props.initIsFetching) return <BigPreloader />;

  return (
    <AdminPage
      deletingIsFetching={props.deletingIsFetching}
      error={props.error}
      data={props.data}
      deleteUser={deleteAccount}
    />
  );
};

const mapStateToProps = state => ({
  initIsFetching: state.users.initIsFetching,
  deletingIsFetching: state.users.deletingIsFetching,
  error: state.users.error,
  data: state.users.data,
  activeUser: state.auth.data,
});

export default compose(
  connect(mapStateToProps, { getAllUsers, deleteUser }),
  withAuthRedirect
)(AdminPageContainer);
