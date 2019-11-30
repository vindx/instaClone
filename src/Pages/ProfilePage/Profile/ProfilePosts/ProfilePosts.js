import React from "react";
import PropTypes from "proptypes";

import ProfilePost from "./ProfilePost/ProfilePost";
import styles from "./ProfilePosts.module.css";

const ProfilePosts = props => {
  const { posts } = props;

  return (
    <div className={styles.profilePosts}>
      {posts.length ? (
        posts.map(({ postPhoto, description }) => (
          <ProfilePost key={Math.random()} photo={postPhoto} description={description}/>
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
