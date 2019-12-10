import React from 'react';
import PropTypes from 'proptypes';

import {
  createNewPostActionCreator,
  updateNewPostInfoActionCreator,
} from '../../../../redux/actions';
import ModalWindow from './ModalWindow';
import StoreContext from '../../../../StoreContext';

const ModalWindowContainer = props => {
  const { onClose, isOpen } = props;

  return (
    <StoreContext.Consumer>
      {store => {
        const addPost = () => {
          store.dispatch(createNewPostActionCreator());
          window.scrollTo(0, 0);
        };

        const newPostOnChange = ({ postPhoto, description }) => {
          store.dispatch(updateNewPostInfoActionCreator({ postPhoto, description }));
        };

        return (
          <ModalWindow
            onClose={onClose}
            isOpen={isOpen}
            newPost={store.getState().state.posts.newPost}
            addPost={addPost}
            newPostOnChange={newPostOnChange}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

ModalWindowContainer.propTypes = {
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default ModalWindowContainer;
