import React, { useState } from 'react';
import PropTypes from 'proptypes';

import { ReactComponent as Preloader } from '../../../../../assets/images/blackPreloader.svg';
import LogOutContainer from '../../../../../shares/components/LogOut/LogOutContainer';
import styles from './ProfileHeader.module.scss';
import Button from '../../../../../shares/components/Button/Button';
import ModalWindowTemplate from '../../../../../shares/components/ModalWindowTemplate/ModalWindowTemplate';

const ProfileHeader = props => {
  const {
    userData,
    removeRequestIsFetching,
    changeRemoveRequestStatus,
    viewMode,
    uploadProfilePhoto,
    profilePhotoOptions,
    profilePhotoOptionsMenuIsOpen,
    deleteProfilePhoto,
  } = props;
  const { userName, fullName, profilePhoto, removeRequest } = userData;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    profilePhotoOptionsMenuIsOpen();
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleRemoveRequest = () => {
    changeRemoveRequestStatus();
  };

  const handleDeleteProfilePhoto = () => {
    deleteProfilePhoto();
  };

  const handleUploadProfilePhoto = e => {
    if (e.target.files.length) {
      uploadProfilePhoto(e.target.files[0]);
    }
  };

  return (
    <>
      <header className={styles.container}>
        <div className={styles.photoContainer}>
          <button onClick={openModal} className={styles.photo}>
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
                  !removeRequestIsFetching ? (
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
      <ModalWindowTemplate
        onClose={closeModal}
        isOpen={isModalOpen}
        success={profilePhotoOptions.success}
      >
        <div className={styles.mainContainer}>
          <label className={styles.optionButton}>
            <input type="file" onChange={handleUploadProfilePhoto} />
            <span>Upload new profile photo (max 3 Mb)</span>
            {profilePhotoOptions.error && (
              <span className={styles.errorSpan}>{profilePhotoOptions.error}</span>
            )}
          </label>
          {profilePhoto && (
            <span onClick={handleDeleteProfilePhoto} className={styles.optionButton}>
              Delete profile photo
            </span>
          )}
          {profilePhotoOptions.isFetching && <Preloader className={styles.preloader} style={{}} />}
        </div>
      </ModalWindowTemplate>
    </>
  );
};

ProfileHeader.propTypes = {
  userData: PropTypes.shape({
    userName: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    profilePhoto: PropTypes.string.isRequired,
    removeRequest: PropTypes.bool.isRequired,
  }).isRequired,
  removeRequestIsFetching: PropTypes.bool.isRequired,
  changeRemoveRequestStatus: PropTypes.func.isRequired,
  viewMode: PropTypes.bool.isRequired,
};

export default ProfileHeader;
