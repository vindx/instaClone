import React from "react";

import styles from "./ProfilePost.module.css";

const ProfilePost = props => {
  const { id, photo, description, /*deletePost*/ dispatch } = props;

  const handleDeletePost = () => {
    const action = { type: "DELETE_POST", id };
    dispatch(action);
  };

  return (
    <div className={styles.profilePost}>
      <img alt="" src={photo} title={description} />
      <button
        className={styles.deletePhoto}
        title="Delete post"
        onClick={handleDeletePost}
      >
        &#128465;
      </button>
    </div>
  );
};

export default ProfilePost;
