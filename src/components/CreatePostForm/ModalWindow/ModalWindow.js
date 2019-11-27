import React from "react";

import styles from "./ModalWindow.module.css";

const ModalWindow = props => {
  const { onClose, isOpen, createNewPost } = props;

  let postPhotoUrl = React.createRef();
  let postDescription = React.createRef();

  const close = e => {
    e.preventDefault();

    if (onClose) {
      onClose();
    }
  };

  if (!isOpen) {
    return null;
  }

  const addPost = () => {
    const postPhoto = postPhotoUrl.current.value;
    const description = postDescription.current.value;
    if (!description) {
      postDescription.current.placeholder = "Please fill this field";
      postDescription.current.style.borderColor = "red";
      postDescription.current.style.outline = "none";
    } else {
      createNewPost({ postPhoto, description });
      onClose();
      window.scrollTo(0, 0);
    }
  };

  return (
    <div>
      <div className={styles.modalContainer}>
        <div>Create a post</div>
        <form className={styles.form}>
          <label>
            Photo (optionally){" "}
            <input type="text" placeholder="Enter URL" ref={postPhotoUrl} />
          </label>
          <label>
            Description <textarea ref={postDescription} />
          </label>
        </form>
        <div>
          <button className={styles.button} onClick={addPost}>
            Create
          </button>
          <button className={styles.button} onClick={close}>
            Cancel
          </button>
        </div>
      </div>
      <div className={styles.background} onClick={close} />
    </div>
  );
};

export default ModalWindow;
