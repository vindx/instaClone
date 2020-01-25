import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import BigPreloader from '../../../../shares/components/Preloaders/BigPreloader/BigPreloader';
import Posts from './Posts';
import { getAllPosts, putLikeOnPost } from '../../../../redux/reducers/postsReducer';
import withAuthRedirect from '../../../../hoc/withAuthRedirect';
import withAdminAuthRedirect from '../../../../hoc/withAdminAuthRedirect';

const PostsContainer = props => {
  useEffect(() => {
    props.getAllPosts(props.userData.userId);
  }, [props.getAllPosts, props.userData.userId]);

  if (props.initIsFetching) return <BigPreloader />;

  return (
    <Posts
      posts={props.posts}
      putLikeOnPost={props.putLikeOnPost}
      likeIsFetching={props.likeIsFetching}
    />
  );
};

const mapStateToProps = state => ({
  userData: state.auth.data,
  initIsFetching: state.posts.initIsFetching,
  posts: state.posts.data.posts,
  likeIsFetching: state.posts.likeIsFetching,
});

export default compose(
  connect(mapStateToProps, { getAllPosts, putLikeOnPost }),
  withAdminAuthRedirect,
  withAuthRedirect
)(PostsContainer);
