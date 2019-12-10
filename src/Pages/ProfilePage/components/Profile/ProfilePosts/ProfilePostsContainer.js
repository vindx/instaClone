import React from 'react';
import ProfilePosts from './ProfilePosts';
import { deletePostActionCreator } from '../../../../../redux/actions';
import StoreContext from '../../../../../StoreContext';

const ProfilePostsContainer = () => (
  <StoreContext.Consumer>
    {store => {
      const activeUser = store.getState().state.users.existedUsers.find(user => user.activeNow);
      const deletePost = id => {
        store.dispatch(deletePostActionCreator(id));
      };
      return <ProfilePosts posts={activeUser.posts} deletePost={deletePost} />;
    }}
  </StoreContext.Consumer>
);

export default ProfilePostsContainer;
