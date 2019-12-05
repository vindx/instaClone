import React from 'react';
import PropTypes from 'proptypes';

import ProfileHeader from './ProfileHeader/ProfileHeader';
import ProfilePosts from './ProfilePosts/ProfilePosts';
import styles from './Profile.module.scss';

const Profile = props => {
  const { user, /* removeRequest, logOut, deletePost */ dispatch } = props;

  return (
    <div className={styles.profileContainer}>
      <ProfileHeader
        // removeRequest={removeRequest}
        // logOut={logOut}
        profilePhotoUrl={user.profilePhoto}
        userName={user.userName}
        fullName={user.fullName}
        removeRequestStatus={user.removeRequest}
        dispatch={dispatch}
      />
      <ProfilePosts
        posts={user.posts}
        // deletePost={deletePost}
        dispatch={dispatch}
      />
    </div>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    profilePhoto: PropTypes.string,
    userName: PropTypes.string,
    fullName: PropTypes.string,
    removeRequest: PropTypes.bool,
    posts: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default Profile;
