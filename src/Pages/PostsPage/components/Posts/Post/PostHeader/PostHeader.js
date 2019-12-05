import React from 'react';
import PropTypes from 'proptypes';

import styles from './PostHeader.module.scss';

const PostHeader = props => {
  const { userName, profilePhotoUrl } = props;

  return (
    <header className={styles.postHeader}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className={styles.accountLogo}>
        <img alt="" src={profilePhotoUrl} />
      </a>
      <div className={styles.accountName}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className={styles.owner}>{userName}</a>
      </div>
    </header>
  );
};

PostHeader.propTypes = {
  userName: PropTypes.string.isRequired,
  profilePhotoUrl: PropTypes.string.isRequired,
};

export default PostHeader;
