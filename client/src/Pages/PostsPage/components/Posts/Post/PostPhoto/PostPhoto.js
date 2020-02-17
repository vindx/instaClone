import React from 'react';
import PropTypes from 'proptypes';

import styles from './PostPhoto.module.scss';

const PostPhoto = props => {
  const { photoUrl } = props;

  return (
    <div className={styles.postPhoto}>
      <img alt="" src={photoUrl} />
    </div>
  );
};

PostPhoto.propTypes = {
  photoUrl: PropTypes.string.isRequired,
};

export default PostPhoto;
