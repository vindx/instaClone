import { connect } from 'react-redux';

import { createPost } from '../../../../redux/actions/createPostActions';
import {
  findTags,
  tagsFindingToggle,
  deleteExistedTags,
  selectTag,
  removeSelectedTag,
  deleteSelectedTags,
  showButton,
  createTag,
} from '../../../../redux/actions/tagsAction';
import ModalWindow from './ModalWindow';

const mapStateToProps = state => ({
  isFetching: state.creatingPost.isFetching,
  success: state.creatingPost.success,
  tagIsFinding: state.tags.isFetching,
  existedTags: state.tags.existedTags,
  selectedTags: state.tags.selectedTags,
  showCreateButton: state.tags.showButton,
});

export default connect(mapStateToProps, {
  createPost,
  findTags,
  tagsFindingToggle,
  deleteExistedTags,
  selectTag,
  removeSelectedTag,
  deleteSelectedTags,
  showButton,
  createTag,
})(ModalWindow);
