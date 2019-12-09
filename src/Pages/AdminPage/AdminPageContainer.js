import React from 'react';

import { deleteAccountActionCreator, logOutActionCreator } from '../../redux/actions';
import AdminPage from './AdminPage';

const AdminPageContainer = props => {
  const { state, dispatch } = props;

  const logOut = () => {
    dispatch(logOutActionCreator());
    localStorage.clear();
  };

  const deleteUser = userName => {
    dispatch(deleteAccountActionCreator(userName));
  };

  return <AdminPage users={state.users.existedUsers} logOut={logOut} deleteUser={deleteUser} />;
};

export default AdminPageContainer;
