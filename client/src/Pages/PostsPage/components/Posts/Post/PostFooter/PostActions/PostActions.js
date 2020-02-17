import React from 'react';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import PropTypes from 'proptypes';

import { ReactComponent as Preloader } from '../../../../../../../assets/images/blackPreloader.svg';
import styles from './PostActions.module.scss';

const PostActions = props => {
  const { id, wasLiked, putLikeOnPost, likeIsFetching } = props;

  const handleLikePost = () => {
    putLikeOnPost(id);
  };

  return (
    <div className={styles.postActions}>
      <button
        className={`${styles.actionButton} ${wasLiked && styles.postWasLiked}`}
        onClick={handleLikePost}
      >
        {likeIsFetching.some(i => i === id) ? (
          <Preloader
            className={`${styles.preloader} ${!wasLiked && styles.redPreloader}`}
            style={{}}
          />
        ) : (
          <FavoriteBorderOutlinedIcon />
        )}
      </button>
    </div>
  );
};

PostActions.propTypes = {
  id: PropTypes.string.isRequired,
  wasLiked: PropTypes.bool.isRequired,
  putLikeOnPost: PropTypes.func.isRequired,
};

export default PostActions;
