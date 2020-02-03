import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'proptypes';

import BigPreloader from '../../../../shares/components/Preloaders/BigPreloader/BigPreloader';
import Posts from './Posts';
import { getAllPosts, putLikeOnPost } from '../../../../redux/actions/postsActions';
import withAuthRedirect from '../../../../hoc/withAuthRedirect';
import withAdminAuthRedirect from '../../../../hoc/withAdminAuthRedirect';

const PostsContainer = props => {
  const { getAllPosts, putLikeOnPost, userData, initIsFetching, posts, likeIsFetching } = props;

  useEffect(() => {
    getAllPosts(userData.userId);
  }, [getAllPosts, userData.userId]);

  if (initIsFetching) return <BigPreloader />;

  return <Posts posts={posts} putLikeOnPost={putLikeOnPost} likeIsFetching={likeIsFetching} />;
};

const mapStateToProps = state => ({
  userData: state.auth.data,
  initIsFetching: state.posts.initIsFetching,
  posts: state.posts.data.posts,
  likeIsFetching: state.posts.likeIsFetching,
});

PostsContainer.propTypes = {
  getAllPosts: PropTypes.func.isRequired,
  putLikeOnPost: PropTypes.func.isRequired,
  userData: PropTypes.shape({
    userId: PropTypes.string,
  }).isRequired,
  initIsFetching: PropTypes.bool.isRequired,
  posts: PropTypes.array.isRequired,
  likeIsFetching: PropTypes.array.isRequired,
};

export default compose(
  connect(mapStateToProps, { getAllPosts, putLikeOnPost }),
  withAdminAuthRedirect,
  withAuthRedirect
)(PostsContainer);
