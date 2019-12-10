import React from 'react';

import { deleteAccountActionCreator, logOutActionCreator } from '../../redux/actions';
import AdminPage from './AdminPage';
import StoreContext from '../../StoreContext';

const AdminPageContainer = () => (
  <StoreContext.Consumer>
    {store => {
      const logOut = () => {
        store.dispatch(logOutActionCreator());
        localStorage.clear();
      };

      const deleteUser = userName => {
        store.dispatch(deleteAccountActionCreator(userName));
      };
      return (
        <AdminPage
          users={store.getState().state.users.existedUsers}
          logOut={logOut}
          deleteUser={deleteUser}
        />
      );
    }}
  </StoreContext.Consumer>
);

export default AdminPageContainer;
