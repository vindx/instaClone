import React from "react";

import styles from "./ProfilePost.module.css";

const ProfilePost = props => {
  const { photo, description } = props;

  return (
    <div className={styles.profilePost}>
      <img alt="" src={photo} title={description} />
      <button className={styles.deletePhoto} title="Delete post">
        &#128465;
      </button>
    </div>
  );
};

export default ProfilePost;
