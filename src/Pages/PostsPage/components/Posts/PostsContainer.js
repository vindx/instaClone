import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import BigPreloader from '../../../../shares/components/Preloaders/BigPreloader/BigPreloader';
import Posts from './Posts';
import { getAllPosts, putLikeOnPost } from '../../../../redux/reducers/postsReducer';
import withAuthRedirect from '../../../../hoc/withAuthRedirect';
import withAdminAuthRedirect from '../../../../hoc/withAdminAuthRedirect';

class PostsContainer extends React.Component {
  componentDidMount() {
    if (this.props.activeUser !== 'admin') {
      this.props.getAllPosts(100, 1, this.props.activeUser);
    }
  }

  render() {
    if (this.props.initIsFetching) return <BigPreloader />;
    return (
      <Posts
        posts={this.props.posts}
        putLikeOnPost={this.props.putLikeOnPost}
        likeIsFetching={this.props.likeIsFetching}
      />
    );
  }
}

const mapStateToProps = state => ({
  initIsFetching: state.posts.initIsFetching,
  posts: state.posts.data.posts,
  activeUser: state.auth.activeUser,
  likeIsFetching: state.posts.likeIsFetching,
});

export default compose(
  connect(mapStateToProps, { getAllPosts, putLikeOnPost }),
  withAdminAuthRedirect,
  withAuthRedirect
)(PostsContainer);
