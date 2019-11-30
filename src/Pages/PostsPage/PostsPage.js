import React from "react";
import Header from "../../components/Header/Header";
import Posts from "./Posts/Posts";
import CreatePostForm from "../../components/CreatePostForm/CreatePostForm";

const PostsPage = props => {
  const { postsUrl, posts, createNewPost, newPost, updateNewPost } = props;

  return (
    <>
      <Header postsUrl={postsUrl} />
      <Posts posts={posts} />
      <CreatePostForm
        newPost={newPost}
        updateNewPost={updateNewPost}
        createNewPost={createNewPost}
      />
    </>
  );
};

export default PostsPage;
