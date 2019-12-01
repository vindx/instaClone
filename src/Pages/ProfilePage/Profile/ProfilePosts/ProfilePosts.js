import React from "react";
import PropTypes from "proptypes";

import ProfilePost from "./ProfilePost/ProfilePost";
import styles from "./ProfilePosts.module.css";

const ProfilePosts = props => {
  const { posts, /*deletePost*/ dispatch } = props;

  return (
    <div className={styles.profilePosts}>
      {posts.length ? (
        posts.map(({ id, postPhoto, description }) => (
          <ProfilePost
            key={id}
            id={id}
            photo={postPhoto}
            description={description}
            // deletePost={deletePost}
            dispatch={dispatch}
          />
        ))
      ) : (
        <div className={styles.zeroPosts}>No Posts Yet</div>
      )}
    </div>
  );
};

ProfilePosts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ProfilePosts;
