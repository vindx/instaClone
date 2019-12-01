import React from "react";

import PostActions from "./PostActions/PostActions";
import PostLikesCounter from "./PostLikesCounter/PostLikesCounter";
import PostDescription from "./PostDescription/PostDescription";
import styles from "./PostFooter.module.css";

const PostFooter = props => {
  const {
    id,
    liked,
    likesNumber,
    userName,
    description,
    // putLikeOnPost
    dispatch
  } = props;

  return (
    <div className={styles.postFooter}>
      <PostActions
        id={id}
        liked={liked}
        // putLikeOnPost={putLikeOnPost}
        dispatch={dispatch}
      />
      <PostLikesCounter likesNumber={likesNumber} />
      <PostDescription userName={userName} description={description} />
    </div>
  );
};

export default PostFooter;
