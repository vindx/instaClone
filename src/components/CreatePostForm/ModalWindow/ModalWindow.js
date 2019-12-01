import React from "react";

import styles from "./ModalWindow.module.css";

const ModalWindow = props => {
  const {
    onClose,
    isOpen,
    newPost,
    /*updateNewPost, createNewPost*/ dispatch
  } = props;

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
    const description = postDescription.current.value;
    if (!description) {
      postDescription.current.placeholder = "Please fill this field";
      postDescription.current.style.borderColor = "red";
      postDescription.current.style.outline = "none";
    } else {
      const action = { type: "CREATE_NEW_POST" };
      dispatch(action);
      onClose();
      window.scrollTo(0, 0);
    }
  };

  const newPostOnChange = () => {
    const postPhoto = postPhotoUrl.current.value;
    const description = postDescription.current.value;
    const action = { type: "UPDATE_NEW_POST_INFO", postPhoto, description };
    dispatch(action);
  };

  return (
    <div>
      <div className={styles.modalContainer}>
        <div>Create a post</div>
        <form className={styles.form}>
          <label>
            Photo (optionally){" "}
            <input
              type="text"
              placeholder="Enter URL"
              value={newPost.postPhoto}
              onChange={newPostOnChange}
              ref={postPhotoUrl}
            />
          </label>
          <label>
            Description{" "}
            <textarea
              value={newPost.description}
              onChange={newPostOnChange}
              ref={postDescription}
            />
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
