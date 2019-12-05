import React from 'react';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';

import { putLikeOnPostActionCreator } from '../../../../../../../redux/actions';
import styles from './PostActions.module.scss';

const PostActions = props => {
  const { id, liked, /*putLikeOnPost*/ dispatch } = props;

  const handleLikePost = () => {
    dispatch(putLikeOnPostActionCreator(id));
  };

  return (
    <section className={styles.postActions}>
      <button
        className={`${styles.actionButton} ${
          liked ? styles.postWasLiked : null
        }`}
        onClick={handleLikePost}
      >
        <FavoriteBorderOutlinedIcon />
      </button>
    </section>
  );
};

export default PostActions;
