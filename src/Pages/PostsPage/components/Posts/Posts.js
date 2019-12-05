import React from 'react';

import Post from './Post/Post';
import styles from './Posts.module.scss';

const Posts = props => {
  const { posts, /*putLikeOnPost*/ dispatch } = props;

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

export default Posts;
