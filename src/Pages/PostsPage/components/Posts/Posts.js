import React from 'react';

import PropTypes from 'proptypes';
import Post from './Post/Post';
import styles from './Posts.module.scss';

const Posts = props => {
  const { posts, putLikeOnPost, likeIsFetching } = props;

  return (
    <div className={styles.mainContainer}>
      {posts
        .map(post => (
          <Post
            key={post._id}
            postInfo={post}
            putLikeOnPost={putLikeOnPost}
            likeIsFetching={likeIsFetching}
          />
        ))
        .reverse()}
    </div>
  );
};

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  putLikeOnPost: PropTypes.func.isRequired,
  likeIsFetching: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Posts;
