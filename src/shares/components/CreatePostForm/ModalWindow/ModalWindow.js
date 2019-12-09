import React from 'react';
import PropTypes from 'proptypes';

import styles from './ModalWindow.module.scss';

const ModalWindow = props => {
  const { onClose, isOpen, newPost, addPost, newPostOnChange } = props;

  const postPhotoUrl = React.createRef();
  const postDescription = React.createRef();

  const close = e => {
    e.preventDefault();

    if (onClose) {
      onClose();
    }
  };

  if (!isOpen) {
    return null;
  }

  const handleAddPost = () => {
    const description = postDescription.current.value;
    if (!description) {
      postDescription.current.placeholder = 'Please fill this field';
      postDescription.current.style.borderColor = 'red';
      postDescription.current.style.outline = 'none';
    } else {
      addPost();
      onClose();
    }
  };

  const handleNewPostChange = () => {
    const postPhoto = postPhotoUrl.current.value;
    const description = postDescription.current.value;
    newPostOnChange({ postPhoto, description });
  };

  return (
    <div>
      <div className={styles.modalContainer}>
        <div>Create a post</div>
        <form className={styles.form}>
          <label>
            Photo (optionally){' '}
            <input
              type="text"
              placeholder="Enter URL"
              value={newPost.postPhoto}
              onChange={handleNewPostChange}
              ref={postPhotoUrl}
            />
          </label>
          <label>
            Description{' '}
            <textarea
              value={newPost.description}
              onChange={handleNewPostChange}
              ref={postDescription}
            />
          </label>
        </form>
        <div>
          <button className={styles.button} onClick={handleAddPost}>
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

ModalWindow.propTypes = {
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  newPost: PropTypes.shape({
    postPhoto: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  addPost: PropTypes.func.isRequired,
  newPostOnChange: PropTypes.func.isRequired,
};

export default ModalWindow;
