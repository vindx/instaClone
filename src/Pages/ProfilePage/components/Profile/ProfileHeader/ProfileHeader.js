import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'proptypes';

import styles from './ProfileHeader.module.scss';

const ProfileHeader = props => {
  const { profilePhotoUrl, userName, fullName, removeRequestStatus, removeRequest, logOut } = props;

  const handleLogOut = () => {
    logOut();
  };

  const handleRemoveRequest = () => {
    removeRequest();
  };

  return (
    <header className={styles.container}>
      <div className={styles.photoContainer}>
        <button className={styles.photo}>
          <img alt="" src={profilePhotoUrl} />
        </button>
      </div>
      <section>
        <div className={styles.userName}>
          <span>{userName}</span>
        </div>
        <section className={styles.buttons}>
          <button className={styles.button} onClick={handleRemoveRequest}>
            {removeRequestStatus ? 'Undo Delete' : 'Delete Profile'}
          </button>
          <Link to="/">
            <button className={styles.button} onClick={handleLogOut}>
              Log Out
            </button>
          </Link>
        </section>
        <div className={styles.profileDescription}>
          <span>{fullName}</span>
        </div>
      </section>
    </header>
  );
};

ProfileHeader.propTypes = {
  profilePhotoUrl: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  removeRequestStatus: PropTypes.bool.isRequired,
  removeRequest: PropTypes.func.isRequired,
  logOut: PropTypes.func.isRequired,
};

export default ProfileHeader;
