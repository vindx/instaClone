import { connect } from 'react-redux';
import ProfilePosts from './ProfilePosts';
import { deletePostActionCreator } from '../../../../../redux/actions';

const mapStateToProps = state => {
  const activeUser = state.state.users.existedUsers.find(user => user.activeNow);
  return {
    posts: activeUser.posts,
  };
};

const mapDispatchToProps = dispatch => ({
  deletePost: id => {
    dispatch(deletePostActionCreator(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePosts);
