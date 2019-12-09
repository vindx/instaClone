import React, { useState } from 'react';
import PropTypes from 'proptypes';

import styles from './CreatePostForm.module.scss';
import ModalWindowContainer from './ModalWindow/ModalWindowContainer';

const CreatePostForm = props => {
  const { state, dispatch } = props;
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
      <ModalWindowContainer
        isOpen={isModalOpen}
        onClose={closeModal}
        state={state}
        dispatch={dispatch}
      />
    </>
  );
};

CreatePostForm.propTypes = {
  state: PropTypes.shape({}).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default CreatePostForm;
