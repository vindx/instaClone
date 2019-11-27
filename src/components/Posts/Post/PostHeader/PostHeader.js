import React from "react";

import styles from "./PostHeader.module.css";

const PostHeader = props => {
  const { userName, profilePhotoUrl } = props;

  return (
    <header className={styles.postHeader}>
      <a className={styles.postHeaderAccountLogo}>
        <img alt="" src={profilePhotoUrl} />
      </a>
      <div className={styles.postHeaderAccountName}>
        <a className={styles.postOwner}>{userName}</a>
      </div>
    </header>
  );
};

export default PostHeader;
