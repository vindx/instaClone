import React from 'react';
import PropTypes from 'proptypes';

import { deletePostActionCreator } from '../../../../../../redux/actions';
import styles from './ProfilePost.module.scss';

const ProfilePost = props => {
  const { id, photo, description, /* deletePost */ dispatch } = props;

  const handleDeletePost = () => {
    dispatch(deletePostActionCreator(id));
  };

  return (
    <div className={styles.profilePost}>
      <img alt="" src={photo} title={description} />
      <button
        className={styles.deletePhoto}
        title="Delete post"
        onClick={handleDeletePost}
      >
        &#128465;
      </button>
    </div>
  );
};

ProfilePost.propTypes = {
  id: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default ProfilePost;
