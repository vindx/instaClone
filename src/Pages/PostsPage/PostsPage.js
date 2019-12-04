import React from 'react';
import Header from '../../components/Header/Header';
import Posts from './Posts/Posts';
import CreatePostForm from '../../components/CreatePostForm/CreatePostForm';

const PostsPage = props => {
  const {
    postsUrl,
    posts,
    newPost,
    //createNewPost,
    //updateNewPost,
    // putLikeOnPost,
    dispatch,
  } = props;

  return (
    <>
      <Header postsUrl={postsUrl} />
      <Posts
        posts={posts}
        // putLikeOnPost={putLikeOnPost}
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

export default PostsPage;
