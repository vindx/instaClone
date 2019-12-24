import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import BigPreloader from '../../../../shares/components/Preloaders/BigPreloader/BigPreloader';
import Posts from './Posts';
import { getAllPosts } from '../../../../redux/reducers/postsReducer';
import withAuthRedirect from '../../../../hoc/withAuthRedirect';
import withAdminAuthRedirect from '../../../../hoc/withAdminAuthRedirect';

class PostsContainer extends React.Component {
  componentDidMount() {
    if (this.props.activeUser !== 'admin') {
      this.props.getAllPosts();
    }
  }

  render() {
    if (this.props.initIsFetching) return <BigPreloader />;
    return <Posts posts={this.props.posts} />;
  }
}

const mapStateToProps = state => ({
  initIsFetching: state.posts.initIsFetching,
  posts: state.posts.data.posts,
  activeUser: state.auth.activeUser,
});

export default compose(
  connect(mapStateToProps, { getAllPosts }),
  withAdminAuthRedirect,
  withAuthRedirect
)(PostsContainer);
