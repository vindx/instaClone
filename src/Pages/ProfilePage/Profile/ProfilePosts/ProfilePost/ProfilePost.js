import React from "react";

import styles from "./ProfilePost.module.css";

const ProfilePost = props => {
  const { photo } = props;

  return (
    <div className={styles.profilePost}>
      <img alt="" src={photo} />
      <button className={styles.deletePhoto}>&#128465;</button>
    </div>
  );
};

export default ProfilePost;
