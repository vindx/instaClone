import React from "react";

import styles from "./ProfilePost.module.css";

const ProfilePost = props => {
  const { id, photo, description, deletePost } = props;

    const handleDeletePost = () => {
    deletePost(id);
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
