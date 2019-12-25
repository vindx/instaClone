import React, { useState } from 'react';
import { connect } from 'react-redux';

import { openCreatingPostForm } from '../../../redux/reducers/createPostReducer';
import ModalWindowContainer from './ModalWindow/ModalWindowContainer';
import styles from './CreatePostForm.module.scss';

const CreatePostForm = props => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    props.openCreatingPostForm();
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button onClick={openModal} className={styles.button}>
        +
      </button>
      <ModalWindowContainer isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default connect(null, { openCreatingPostForm })(CreatePostForm);
