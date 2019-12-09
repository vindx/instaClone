import React from 'react';

import Posts from './Posts';
import { putLikeOnPostActionCreator } from '../../../../redux/actions';

const PostsContainer = props => {
  const { state, dispatch } = props;

  const putLikeOnPost = id => {
    dispatch(putLikeOnPostActionCreator(id));
  };

  return <Posts posts={state.posts.existedPosts} putLikeOnPost={putLikeOnPost} />;
};

export default PostsContainer;
