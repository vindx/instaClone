import React from 'react';

import ProfileHeaderContainer from './ProfileHeader/ProfileHeaderContainer';
import ProfilePostsContainer from './ProfilePosts/ProfilePostsContainer';
import styles from './Profile.module.scss';

const Profile = () => (
  <div className={styles.profileContainer}>
    <ProfileHeaderContainer />
    <ProfilePostsContainer />
  </div>
);

export default Profile;
