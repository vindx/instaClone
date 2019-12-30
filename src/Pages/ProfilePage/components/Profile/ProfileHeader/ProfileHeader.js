import React from 'react';
import PropTypes from 'proptypes';

import { ReactComponent as Preloader } from '../../../../../assets/images/blackPreloader.svg';
import LogOutContainer from '../../../../../shares/components/LogOut/LogOutContainer';
import styles from './ProfileHeader.module.scss';
import Button from '../../../../../shares/components/Button/Button';

const ProfileHeader = props => {
  const { userData, isFetching, changeRemoveRequestStatus, viewMode } = props;
  const { userName, fullName, profilePhoto, removeRequest } = userData;

  const handleRemoveRequest = () => {
    changeRemoveRequestStatus();
  };

  return (
    <header className={styles.container}>
      <div className={styles.photoContainer}>
        <button className={styles.photo}>
          <img alt="" src={profilePhoto} />
        </button>
      </div>
      <section>
        <div className={styles.userName}>
          <span>{userName}</span>
        </div>
        {!viewMode && (
          <section className={styles.buttons}>
            <Button
              btn_name={
                !isFetching ? (
                  removeRequest ? (
                    'Undo Delete'
                  ) : (
                    'Delete Profile'
                  )
                ) : (
                  <Preloader className={styles.preloader} style={{}} />
                )
              }
              onClick={handleRemoveRequest}
              style={{ marginRight: 5 }}
            />
            <LogOutContainer />
          </section>
        )}

        <div className={styles.profileDescription}>
          <span>{fullName}</span>
        </div>
      </section>
    </header>
  );
};

ProfileHeader.propTypes = {
  userData: PropTypes.shape({
    userName: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    profilePhoto: PropTypes.string.isRequired,
    removeRequest: PropTypes.bool.isRequired,
  }).isRequired,
  isFetching: PropTypes.bool.isRequired,
  changeRemoveRequestStatus: PropTypes.func.isRequired,
  viewMode: PropTypes.bool.isRequired,
};

export default ProfileHeader;
