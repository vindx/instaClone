import React from 'react';
import PropTypes from 'proptypes';

import styles from './ProfilePost.module.scss';

const ProfilePost = props => {
  const { id, photo, description, deletePost } = props;

  const handleDeletePost = () => {
    deletePost(id);
  };

  return (
    <div className={styles.profilePost}>
      <img alt="" src={photo} title={description} />
      <button className={styles.deletePhoto} title="Delete post" onClick={handleDeletePost}>
        &#128465;
      </button>
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
