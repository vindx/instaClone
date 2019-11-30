import React from "react";
import Header from "../../components/Header/Header";
import Profile from "./Profile/Profile";
import CreatePostForm from "../../components/CreatePostForm/CreatePostForm";

const ProfilePage = props => {
  const {
    postsUrl,
    user,
    removeRequest,
    logOut,
    createNewPost,
    newPost,
    updateNewPost
  } = props;

  return (
    <>
      <Header postsUrl={postsUrl} />
      <Profile user={user} removeRequest={removeRequest} logOut={logOut} />
      <CreatePostForm
        newPost={newPost}
        updateNewPost={updateNewPost}
        createNewPost={createNewPost}
      />
    </>
  );
};

export default ProfilePage;
