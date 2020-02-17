import React from 'react';
import PropTypes from 'proptypes';

import PostActions from './PostActions/PostActions';
import PostLikesCounter from './PostLikesCounter/PostLikesCounter';
import PostDescription from './PostDescription/PostDescription';
import PostTags from '../../../../../../shares/components/PostTags/PostTags';
import styles from './PostFooter.module.scss';

const PostFooter = props => {
  const {
    id,
    wasLiked,
    likesNumber,
    userName,
    description,
    putLikeOnPost,
    likeIsFetching,
    tags,
    getPostsByTag,
  } = props;

  return (
    <div className={styles.postFooter}>
      <PostActions
        id={id}
        wasLiked={wasLiked}
        putLikeOnPost={putLikeOnPost}
        likeIsFetching={likeIsFetching}
      />
      <PostLikesCounter likesArray={likesNumber} />
      <PostDescription userName={userName} description={description} />
      <div style={{ marginTop: 5 }}>
        <PostTags tags={tags} onClick={getPostsByTag} />
      </div>
    </div>
  );
};

PostFooter.propTypes = {
  id: PropTypes.string.isRequired,
  wasLiked: PropTypes.bool.isRequired,
  likeIsFetching: PropTypes.array.isRequired,
  likesNumber: PropTypes.array.isRequired,
  userName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  putLikeOnPost: PropTypes.func.isRequired,
  tags: PropTypes.array.isRequired,
  getPostsByTag: PropTypes.func.isRequired,
};

export default PostFooter;
