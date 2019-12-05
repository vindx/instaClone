import React, { useState } from 'react';
import PropTypes from 'proptypes';

import ModalWindow from './ModalWindow/ModalWindow';
import styles from './CreatePostForm.module.scss';

const CreatePostForm = props => {
  const { newPost, /* updateNewPost, createNewPst */ dispatch } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button onClick={openModal} className={styles.button}>
        +
      </button>
      <ModalWindow
        isOpen={isModalOpen}
        onClose={closeModal}
        newPost={newPost}
        // updateNewPost={updateNewPost}
        // createNewPost={createNewPost}
        dispatch={dispatch}
      />
    </>
  );
};

CreatePostForm.propTypes = {
  newPost: PropTypes.shape({}).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default CreatePostForm;
