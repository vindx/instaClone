import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'proptypes';
import styles from './PostDescription.module.scss';

const PostDescription = props => {
  const { userName, description } = props;

  return (
    <div className={styles.postDescription}>
      <Link to={`/profile/${userName}`} className={styles.owner}>
        {userName}
      </Link>
      <span>{description}</span>
    </div>
  );
};

PostDescription.propTypes = {
  userName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default PostDescription;
