import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'proptypes';

import AdminPage from './AdminPage';
import { getAllUsers, deleteUser } from '../../redux/actions/usersActions';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import withUserAuthRedirect from '../../hoc/withUserAuthRedirect';
import BigPreloader from '../../shares/components/Preloaders/BigPreloader/BigPreloader';

const AdminPageContainer = props => {
  const { getAllUsers, deleteUser, initIsFetching, deletingIsFetching, error, data } = props;

  useEffect(() => {
    getAllUsers();
  }, [getAllUsers]);

  const deleteAccount = userId => {
    deleteUser(userId);
  };

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
});

AdminPageContainer.propTypes = {
  getAllUsers: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired,
  initIsFetching: PropTypes.bool.isRequired,
  deletingIsFetching: PropTypes.bool.isRequired,
  error: PropTypes.string,
  data: PropTypes.shape({}).isRequired,
};

AdminPageContainer.defaultProps = {
  error: null,
};

export default compose(
  connect(mapStateToProps, { getAllUsers, deleteUser }),
  withUserAuthRedirect,
  withAuthRedirect
)(AdminPageContainer);
