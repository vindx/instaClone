import React, { useState } from 'react';
import PropTypes from 'proptypes';

import ModalWindowTemplate from '../../../../../../../shares/components/ModalWindowTemplate/ModalWindowTemplate';
import WhoLikedPostPlate from './WhoLikedPostPlate/WhoLikedPostPlate';
import styles from './PostLikesCounter.module.scss';

const PostLikesCounter = props => {
  const { likes, postId } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {likes ? (
        <div className={styles.likesContainer} onClick={openModal}>
          <span className={styles.postLikesCounter}>{likes}</span>
          {likes === 1 ? 'like' : 'likes'}
        </div>
      ) : (
        <></>
      )}
      <ModalWindowTemplate onClose={closeModal} isOpen={isModalOpen}>
        <WhoLikedPostPlate postId={postId} />
      </ModalWindowTemplate>
    </>
  );
};

PostLikesCounter.propTypes = {
  likes: PropTypes.number.isRequired,
  postId: PropTypes.string.isRequired,
};

export default PostLikesCounter;
