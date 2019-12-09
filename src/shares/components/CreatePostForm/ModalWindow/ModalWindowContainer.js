import React from 'react';

import {
  createNewPostActionCreator,
  updateNewPostInfoActionCreator,
} from '../../../../redux/actions';
import ModalWindow from './ModalWindow';

const ModalWindowContainer = props => {
  const { onClose, isOpen, state, dispatch } = props;

  const addPost = () => {
    dispatch(createNewPostActionCreator());
    window.scrollTo(0, 0);
  };

  const newPostOnChange = ({ postPhoto, description }) => {
    dispatch(updateNewPostInfoActionCreator({ postPhoto, description }));
  };

  return (
    <ModalWindow
      onClose={onClose}
      isOpen={isOpen}
      newPost={state.posts.newPost}
      addPost={addPost}
      newPostOnChange={newPostOnChange}
    />
  );
};

export default ModalWindowContainer;
