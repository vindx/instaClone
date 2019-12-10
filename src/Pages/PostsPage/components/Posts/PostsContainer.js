import React from 'react';

import Posts from './Posts';
import { putLikeOnPostActionCreator } from '../../../../redux/actions';
import StoreContext from '../../../../StoreContext';

const PostsContainer = () => (
  <StoreContext.Consumer>
    {store => {
      const putLikeOnPost = id => {
        store.dispatch(putLikeOnPostActionCreator(id));
      };
      return (
        <Posts posts={store.getState().state.posts.existedPosts} putLikeOnPost={putLikeOnPost} />
      );
    }}
  </StoreContext.Consumer>
);

export default PostsContainer;
