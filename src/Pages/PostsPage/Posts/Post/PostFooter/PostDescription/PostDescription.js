import React from 'react';

import styles from './PostDescription.module.css';

const PostDescription = props => {
  const { userName, description } = props;

  return (
    <div className={styles.postDescription}>
      <a className={styles.postOwner}>{userName}</a>
      <span>{description}</span>
    </div>
  );
};

export default PostDescription;
