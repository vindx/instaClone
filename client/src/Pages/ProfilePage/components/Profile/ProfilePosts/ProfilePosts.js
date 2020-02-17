import React from 'react';
import PropTypes from 'proptypes';

import ProfilePost from './ProfilePost/ProfilePost';
import styles from './ProfilePosts.module.scss';

const ProfilePosts = props => {
  const { posts, deletePost, deleteIsFetching, viewMode } = props;

  return (
    <div className={styles.profilePosts}>
      {posts.length ? (
        posts
          .map(({ _id: id, postPhoto, description }) => (
            <ProfilePost
              key={id}
              id={id}
              photo={postPhoto}
              description={description}
              deletePost={deletePost}
              deleteIsFetching={deleteIsFetching}
              viewMode={viewMode}
            />
          ))
          .reverse()
      ) : (
        <div className={styles.zeroPosts}>No Posts Yet</div>
      )}
    </div>
  );
};

ProfilePosts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  deletePost: PropTypes.func.isRequired,
};

export default ProfilePosts;
