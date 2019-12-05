import React from 'react';
import PropTypes from 'proptypes';

import PostActions from './PostActions/PostActions';
import PostLikesCounter from './PostLikesCounter/PostLikesCounter';
import PostDescription from './PostDescription/PostDescription';
import styles from './PostFooter.module.scss';

const PostFooter = props => {
  const {
    id,
    wasLiked,
    likesNumber,
    userName,
    description,
    // putLikeOnPost
    dispatch,
  } = props;

  return (
    <div className={styles.postFooter}>
      <PostActions
        id={id}
        wasLiked={wasLiked}
        // putLikeOnPost={putLikeOnPost}
        dispatch={dispatch}
      />
      <PostLikesCounter likesArray={likesNumber} />
      <PostDescription userName={userName} description={description} />
    </div>
  );
};

PostFooter.propTypes = {
  id: PropTypes.string.isRequired,
  wasLiked: PropTypes.bool.isRequired,
  likesNumber: PropTypes.arrayOf(PropTypes.string).isRequired,
  userName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default PostFooter;
