import React from 'react';
import PropTypes from 'proptypes';

import {
  createNewPostActionCreator,
  updateNewPostInfoActionCreator,
} from '../../../../redux/actions';
import styles from './ModalWindow.module.scss';

const ModalWindow = props => {
  const {
    onClose,
    isOpen,
    newPost,
    /* updateNewPost, createNewPost */ dispatch,
  } = props;

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

  const addPost = () => {
    const description = postDescription.current.value;
    if (!description) {
      postDescription.current.placeholder = 'Please fill this field';
      postDescription.current.style.borderColor = 'red';
      postDescription.current.style.outline = 'none';
    } else {
      dispatch(createNewPostActionCreator());
      onClose();
      window.scrollTo(0, 0);
    }
  };

  const newPostOnChange = () => {
    const postPhoto = postPhotoUrl.current.value;
    const description = postDescription.current.value;
    dispatch(updateNewPostInfoActionCreator({ postPhoto, description }));
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
              onChange={newPostOnChange}
              ref={postPhotoUrl}
            />
          </label>
          <label>
            Description{' '}
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

ModalWindow.propTypes = {
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  newPost: PropTypes.shape({
    postPhoto: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default ModalWindow;
