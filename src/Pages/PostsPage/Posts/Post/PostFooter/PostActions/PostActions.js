import React from "react";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";

import styles from "./PostActions.module.css";

const PostActions = props => {
  const { id, liked, /*putLikeOnPost*/ dispatch } = props;

  const handleLikePost = () => {
    const action = { type: "PUT_LIKE_ON_POST", id };
    dispatch(action);
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
