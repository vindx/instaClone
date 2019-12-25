import { connect } from 'react-redux';

import { createPost } from '../../../../redux/reducers/createPostReducer';
import ModalWindow from './ModalWindow';

const mapStateToProps = state => ({
  isFetching: state.creatingPost.isFetching,
  success: state.creatingPost.success,
});

export default connect(mapStateToProps, { createPost })(ModalWindow);
