import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'proptypes';

import AdminPage from './AdminPage';
import { getAllUsers, deleteUser } from '../../redux/reducers/usersReducer';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import BigPreloader from '../../shares/components/Preloaders/BigPreloader/BigPreloader';

const AdminPageContainer = props => {
  const {
    getAllUsers,
    deleteUser,
    activeUser,
    initIsFetching,
    deletingIsFetching,
    error,
    data,
  } = props;

  useEffect(() => {
    getAllUsers();
  }, [getAllUsers]);

  const deleteAccount = userId => {
    deleteUser(userId);
  };

  if (activeUser && activeUser.role !== 'admin') return <Redirect to="/" />;
  if (initIsFetching) return <BigPreloader />;

  return (
    <AdminPage
      deletingIsFetching={deletingIsFetching}
      error={error}
      data={data}
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

AdminPageContainer.propTypes = {
  getAllUsers: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired,
  initIsFetching: PropTypes.bool.isRequired,
  deletingIsFetching: PropTypes.bool.isRequired,
  error: PropTypes.string,
  data: PropTypes.shape({}).isRequired,
  activeUser: PropTypes.shape({
    role: PropTypes.string.isRequired,
  }).isRequired,
};

AdminPageContainer.defaultProps = {
  error: null,
};

export default compose(
  connect(mapStateToProps, { getAllUsers, deleteUser }),
  withAuthRedirect
)(AdminPageContainer);
