import React from 'react';

import ProfileHeaderContainer from './ProfileHeader/ProfileHeaderContainer';
import ProfilePostsContainer from './ProfilePosts/ProfilePostsContainer';
import styles from './Profile.module.scss';

const Profile = props => {
  const { state, dispatch } = props;

  return (
    <div className={styles.profileContainer}>
      <ProfileHeaderContainer state={state} dispatch={dispatch} />
      <ProfilePostsContainer state={state} dispatch={dispatch} />
    </div>
  );
};

export default Profile;
