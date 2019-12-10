import { connect } from 'react-redux';

import {
  createNewPostActionCreator,
  updateNewPostInfoActionCreator,
} from '../../../../redux/actions';
import ModalWindow from './ModalWindow';

const mapStateToProps = state => ({
  newPost: state.state.posts.newPost,
});

const mapDispatchToProps = dispatch => ({
  addPost: () => {
    dispatch(createNewPostActionCreator());
    window.scrollTo(0, 0);
  },
  newPostOnChange: ({ postPhoto, description }) => {
    dispatch(updateNewPostInfoActionCreator({ postPhoto, description }));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalWindow);
