import React from "react";

import Post from "./Post/Post";
import styles from "./Posts.module.css";

const Posts = props => {
  const { posts, putLikeOnPost } = props;

  return (
    <div className={styles.mainContainer}>
      {posts.map(post => (
        <Post key={post.id} postInfo={post} putLikeOnPost={putLikeOnPost}/>
      ))}
    </div>
  );
};

export default Posts;
