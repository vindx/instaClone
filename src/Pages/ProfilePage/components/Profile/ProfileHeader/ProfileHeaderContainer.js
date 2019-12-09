import React from 'react';

import { logOutActionCreator, removeRequestActionCreator } from '../../../../../redux/actions';
import ProfileHeader from './ProfileHeader';

const ProfileHeaderContainer = props => {
  const { state, dispatch } = props;

  const {
    fullName,
    profilePhoto,
    removeRequest: removeRequestStatus,
    userName,
  } = state.users.existedUsers.find(user => user.activeNow);

  const logOut = () => {
    dispatch(logOutActionCreator());
    localStorage.clear();
  };

  const removeRequest = () => {
    dispatch(removeRequestActionCreator());
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
};

export default ProfileHeaderContainer;
