import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'proptypes';

import styles from './PostHeader.module.scss';
import defaultPhoto from '../../../../../../assets/images/defaultProfilePhoto.jpg';

const PostHeader = props => {
  const { userName, profilePhotoUrl, lastPostElementRef } = props;

  return (
    <header className={styles.postHeader} ref={lastPostElementRef}>
      <Link
        to={`/profile/${userName}`}
        className={styles.accountLogo}
        style={{ backgroundImage: `url(${defaultPhoto})` }}
      >
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
