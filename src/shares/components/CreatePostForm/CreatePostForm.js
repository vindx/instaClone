import React, { useState } from 'react';

import styles from './CreatePostForm.module.scss';
import ModalWindowContainer from './ModalWindow/ModalWindowContainer';

const CreatePostForm = () => {
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
      <ModalWindowContainer isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default CreatePostForm;
