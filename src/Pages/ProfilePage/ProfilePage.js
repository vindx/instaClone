import React from "react";
import Header from "../../components/Header/Header";
import Profile from "./Profile/Profile";
import CreatePostForm from "../../components/CreatePostForm/CreatePostForm";

const ProfilePage = props => {
  const { postsUrl, user, removeRequest, logOut, createNewPost } = props;

  return (
    <>
      <Header postsUrl={postsUrl} />
      <Profile user={user} removeRequest={removeRequest} logOut={logOut} />
      <CreatePostForm createNewPost={createNewPost} />
    </>
  );
};

export default ProfilePage;
