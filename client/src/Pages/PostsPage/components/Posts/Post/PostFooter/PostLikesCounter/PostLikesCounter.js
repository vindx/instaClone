import React from 'react';
import PropTypes from 'proptypes';

import styles from './PostLikesCounter.module.scss';

const PostLikesCounter = props => {
  const { likesArray } = props;

  return (
    <>
      {likesArray.length > 0 ? (
        <div className={styles.likesContainer}>
          <span className={styles.postLikesCounter}>{likesArray.length}</span>
          {likesArray.length === 1 ? 'like' : 'likes'}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

PostLikesCounter.propTypes = {
  likesArray: PropTypes.array.isRequired,
};

export default PostLikesCounter;
