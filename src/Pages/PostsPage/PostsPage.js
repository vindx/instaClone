import React from 'react';
import PropTypes from 'proptypes';

import Header from '../../shares/components/Header/Header';
import CreatePostForm from '../../shares/components/CreatePostForm/CreatePostForm';
import PostsContainer from './components/Posts/PostsContainer';

const PostsPage = () => (
  <>
    <Header />
    <PostsContainer />
    <CreatePostForm />
  </>
);

export default PostsPage;
