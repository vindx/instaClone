import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'proptypes';

import defaultPhoto from '../../../assets/images/defaultProfilePhoto.jpg';
import styles from './SmallUserInfoBar.module.scss';

const SmallUserInfoBar = ({ userName, profilePhoto }) => (
  <div className={styles.mainContainer}>
    <Link
      to={`/profile/${userName}`}
      className={styles.accountLogo}
      style={{ backgroundImage: `url(${defaultPhoto})` }}
    >
      <img alt="" src={profilePhoto} />
    </Link>
    <div className={styles.accountName}>
      <Link className={styles.owner} to={`/profile/${userName}`}>
        {userName}
      </Link>
    </div>
  </div>
);

SmallUserInfoBar.propTypes = {
  userName: PropTypes.string.isRequired,
  profilePhoto: PropTypes.string.isRequired,
};

export default SmallUserInfoBar;
