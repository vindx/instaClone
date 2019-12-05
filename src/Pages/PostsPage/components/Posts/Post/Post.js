import React from 'react';
import PropTypes from 'proptypes';

import PostHeader from './PostHeader/PostHeader';
import PostFooter from './PostFooter/PostFooter';
import PostPhoto from './PostPhoto/PostPhoto';
import styles from './Post.module.scss';

const Post = props => {
  const { postInfo, /* putLikeOnPost */ dispatch } = props;
  const { owner, postPhoto, id, wasLiked, likes, description } = postInfo;

  return (
    <article className={styles.mainContainer}>
      <PostHeader
        profilePhotoUrl={owner.profilePhoto}
        userName={owner.userName}
      />
      <PostPhoto photoUrl={postPhoto} />
      <PostFooter
        id={id}
        wasLiked={wasLiked}
        likesNumber={likes}
        userName={owner.userName}
        description={description}
        // putLikeOnPost={putLikeOnPost}
        dispatch={dispatch}
      />
    </article>
  );
};

Post.propTypes = {
  postInfo: PropTypes.shape({
    owner: PropTypes.object,
    postPhoto: PropTypes.string,
    id: PropTypes.string,
    wasLiked: PropTypes.bool,
    likes: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default Post;
