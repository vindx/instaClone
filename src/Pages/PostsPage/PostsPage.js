import React from 'react';
import PropTypes from 'proptypes';

import Header from '../../shares/components/Header/Header';
import CreatePostForm from '../../shares/components/CreatePostForm/CreatePostForm';
import PostsContainer from './components/Posts/PostsContainer';

const PostsPage = props => {
  const { postsUrl, state, dispatch } = props;

  return (
    <>
      <Header postsUrl={postsUrl} />
      <PostsContainer state={state} dispatch={dispatch} />
      <CreatePostForm state={state} dispatch={dispatch} />
    </>
  );
};

PostsPage.propTypes = {
  postsUrl: PropTypes.string.isRequired,
  state: PropTypes.shape({}).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default PostsPage;
