import { connect } from 'react-redux';

import Posts from './Posts';
import { putLikeOnPostActionCreator } from '../../../../redux/actions';

const mapStateToProps = state => ({
  posts: state.state.posts.existedPosts,
});

const mapDispatchToProps = dispatch => ({
  putLikeOnPost: id => {
    dispatch(putLikeOnPostActionCreator(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
