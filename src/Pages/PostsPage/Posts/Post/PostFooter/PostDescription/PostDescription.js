import React from 'react';

import styles from './PostDescription.module.scss';

const PostDescription = props => {
  const { userName, description } = props;

  return (
    <div className={styles.postDescription}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className={styles.owner}>{userName}</a>
      <span>{description}</span>
    </div>
  );
};

export default PostDescription;
