import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'proptypes';

import styles from './PostHeader.module.scss';

const PostHeader = props => {
  const { userName, profilePhotoUrl } = props;

  return (
    <header className={styles.postHeader}>
      <Link to={`/profile/${userName}`} className={styles.accountLogo}>
        <img alt="" src={profilePhotoUrl} />
      </Link>
      <div className={styles.accountName}>
        <Link to={`/profile/${userName}`} className={styles.owner}>
          {userName}
        </Link>
      </div>
    </header>
  );
};

PostHeader.propTypes = {
  userName: PropTypes.string.isRequired,
  profilePhotoUrl: PropTypes.string.isRequired,
};

export default PostHeader;
