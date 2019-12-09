import React from 'react';
import ProfilePosts from './ProfilePosts';
import { deletePostActionCreator } from '../../../../../redux/actions';

const ProfilePostsContainer = props => {
  const { state, dispatch } = props;

  const activeUser = state.users.existedUsers.find(user => user.activeNow);

  const deletePost = id => {
    dispatch(deletePostActionCreator(id));
  };

  return <ProfilePosts posts={activeUser.posts} deletePost={deletePost} />;
};

export default ProfilePostsContainer;
