import React from 'react';
import Header from '../../components/Header/Header';
import Profile from './Profile/Profile';
import CreatePostForm from '../../components/CreatePostForm/CreatePostForm';

const ProfilePage = props => {
  const {
    postsUrl,
    user,
    newPost,
    // removeRequest,
    // logOut,
    // createNewPost,
    // updateNewPost,
    // deletePost
    dispatch,
  } = props;

  return (
    <>
      <Header postsUrl={postsUrl} />
      <Profile
        user={user}
        // deletePost={deletePost}
        // removeRequest={removeRequest}
        // logOut={logOut}
        dispatch={dispatch}
      />
      <CreatePostForm
        newPost={newPost}
        // updateNewPost={updateNewPost}
        // createNewPost={createNewPost}
        dispatch={dispatch}
      />
    </>
  );
};

export default ProfilePage;
