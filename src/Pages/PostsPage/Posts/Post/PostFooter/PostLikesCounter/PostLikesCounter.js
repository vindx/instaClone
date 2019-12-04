import React from 'react';
import styles from './PostLikesCounter.module.css';

const PostLikesCounter = props => {
  const { likesNumber } = props;

  return (
    <>
      {likesNumber.length > 0 ? (
        <div className={styles.likesContainer}>
          <span className={styles.postLikesCounter}>{likesNumber.length}</span>
          {likesNumber.length === 1 ? 'like' : 'likes'}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default PostLikesCounter;
