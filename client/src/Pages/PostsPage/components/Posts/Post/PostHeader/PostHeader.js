import React from 'react';
import PropTypes from 'proptypes';

import styles from './PostHeader.module.scss';
import SmallUserInfoBar from '../../../../../../shares/components/SmallUserInfoBar/SmallUserInfoBar';

const PostHeader = props => {
  const { userName, profilePhotoUrl, lastPostElementRef } = props;

  return (
    <header className={styles.postHeader} ref={lastPostElementRef}>
      <SmallUserInfoBar userName={userName} profilePhoto={profilePhotoUrl} />
    </header>
  );
};

PostHeader.propTypes = {
  userName: PropTypes.string.isRequired,
  profilePhotoUrl: PropTypes.string.isRequired,
};

export default PostHeader;
