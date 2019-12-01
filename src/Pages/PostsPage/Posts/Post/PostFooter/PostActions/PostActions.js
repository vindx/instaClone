import React from "react";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";

import styles from "./PostActions.module.css";

const PostActions = props => {
  const { id, liked, putLikeOnPost } = props;

  const handleLikePost = () => {
    putLikeOnPost(id);
  };

  return (
    <section className={styles.postActions}>
      <button
        className={`${styles.postActionButton} ${
          liked ? styles.postWasLiked : null
        }`}
        onClick={handleLikePost}
      >
        <FavoriteBorderOutlinedIcon />
      </button>
    </section>
  );
};

export default PostActions;
