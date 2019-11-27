import React, { useState } from "react";

import ModalWindow from "./ModalWindow/ModalWindow";
import styles from "./CreatePost.module.css";

const CreatePost = props => {
  const { createNewPost } = props;
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
        createNewPost={createNewPost}
      />
    </>
  );
};

export default CreatePost;
