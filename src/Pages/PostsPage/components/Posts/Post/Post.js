import React from 'react';
import PropTypes from 'proptypes';

import PostHeader from './PostHeader/PostHeader';
import PostFooter from './PostFooter/PostFooter';
import PostPhoto from './PostPhoto/PostPhoto';
import styles from './Post.module.scss';

const Post = props => {
  const { postInfo, putLikeOnPost, likeIsFetching } = props;
  const { ownerInfo, postPhoto, _id: id, wasLiked, likes, description } = postInfo;

  return (
    <article className={styles.mainContainer}>
      <PostHeader profilePhotoUrl={ownerInfo.profilePhoto} userName={ownerInfo.userName} />
      <PostPhoto photoUrl={postPhoto} />
      <PostFooter
        id={id}
        wasLiked={wasLiked}
        likesNumber={likes}
        userName={ownerInfo.userName}
        description={description}
        putLikeOnPost={putLikeOnPost}
        likeIsFetching={likeIsFetching}
      />
    </article>
  );
};

Post.propTypes = {
  postInfo: PropTypes.shape({
    ownerInfo: PropTypes.object,
    postPhoto: PropTypes.string,
    _id: PropTypes.string,
    wasLiked: PropTypes.bool,
    likes: PropTypes.array,
    description: PropTypes.string,
  }).isRequired,
  putLikeOnPost: PropTypes.func.isRequired,
  likeIsFetching: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Post;
