import React from "react";

import ProfileHeader from "./ProfileHeader/ProfileHeader";
import ProfilePosts from "./ProfilePosts/ProfilePosts";
import styles from "./Profile.module.css";

const Profile = props => {
  const { user, /* removeRequest, logOut, deletePost*/ dispatch } = props;

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

export default Profile;
