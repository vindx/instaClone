import React from 'react';
import PropTypes from 'proptypes';

import { ReactComponent as Preloader } from '../../../../../../assets/images/blackPreloader.svg';
import styles from './ProfilePost.module.scss';

const ProfilePost = props => {
  const { id, photo, description, deletePost, deleteIsFetching, viewMode } = props;

  const handleDeletePost = () => {
    deletePost(id);
  };

  return (
    <div className={styles.profilePost}>
      {deleteIsFetching.some(i => i === id) ? (
        <Preloader className={styles.preloader} style={{}} />
      ) : (
        <>
          <img alt="" src={photo} title={description} />
          {!viewMode && (
            <button className={styles.deletePhoto} title="Delete post" onClick={handleDeletePost}>
              &#128465;
            </button>
          )}
        </>
      )}
    </div>
  );
};

ProfilePost.propTypes = {
  id: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  deletePost: PropTypes.func.isRequired,
};

export default ProfilePost;
