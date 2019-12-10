import React from 'react';

import { logOutActionCreator, removeRequestActionCreator } from '../../../../../redux/actions';
import ProfileHeader from './ProfileHeader';
import StoreContext from '../../../../../StoreContext';

const ProfileHeaderContainer = () => (
  <StoreContext.Consumer>
    {store => {
      const {
        fullName,
        profilePhoto,
        removeRequest: removeRequestStatus,
        userName,
      } = store.getState().state.users.existedUsers.find(user => user.activeNow);

      const logOut = () => {
        store.dispatch(logOutActionCreator());
        localStorage.clear();
      };

      const removeRequest = () => {
        store.dispatch(removeRequestActionCreator());
      };
      return (
        <ProfileHeader
          profilePhotoUrl={profilePhoto}
          userName={userName}
          fullName={fullName}
          removeRequestStatus={removeRequestStatus}
          removeRequest={removeRequest}
          logOut={logOut}
        />
      );
    }}
  </StoreContext.Consumer>
);

export default ProfileHeaderContainer;
