import React from 'react';
import PropTypes from 'proptypes';

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

PostDescription.propTypes = {
  userName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default PostDescription;
