import React from 'react';

import PropTypes from 'proptypes';
import Post from './Post/Post';
import styles from './Posts.module.scss';

const Posts = props => {
  const { posts, /* putLikeOnPost */ dispatch } = props;

  return (
    <div className={styles.mainContainer}>
      {posts.map(post => (
        <Post
          key={post.id}
          postInfo={post}
          // putLikeOnPost={putLikeOnPost}
          dispatch={dispatch}
        />
      ))}
    </div>
  );
};

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default Posts;
