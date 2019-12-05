import React from 'react';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import PropTypes from 'proptypes';

import { putLikeOnPostActionCreator } from '../../../../../../../redux/actions';
import styles from './PostActions.module.scss';

const PostActions = props => {
  const { id, wasLiked, /* putLikeOnPost */ dispatch } = props;

  const handleLikePost = () => {
    dispatch(putLikeOnPostActionCreator(id));
  };

  return (
    <section className={styles.postActions}>
      <button
        className={`${styles.actionButton} ${
          wasLiked ? styles.postWasLiked : null
        }`}
        onClick={handleLikePost}
      >
        <FavoriteBorderOutlinedIcon />
      </button>
    </section>
  );
};

PostActions.propTypes = {
  id: PropTypes.string.isRequired,
  wasLiked: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default PostActions;
