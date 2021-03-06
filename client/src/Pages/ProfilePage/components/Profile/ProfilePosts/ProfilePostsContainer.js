import { connect } from 'react-redux';

import { deletePost } from '../../../../../redux/actions/profileActions';
import ProfilePosts from './ProfilePosts';

const mapStateToProps = state => ({
  viewMode: state.profile.viewMode,
  deleteIsFetching: state.profile.deleteIsFetching,
});

export default connect(mapStateToProps, { deletePost })(ProfilePosts);
