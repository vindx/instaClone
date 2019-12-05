import React from 'react';
import PropTypes from 'proptypes';
import Header from '../../shares/components/Header/Header';
import Posts from './components/Posts/Posts';
import CreatePostForm from '../../shares/components/CreatePostForm/CreatePostForm';

const PostsPage = props => {
  const {
    postsUrl,
    posts,
    newPost,
    // createNewPost,
    // updateNewPost,
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

PostsPage.propTypes = {
  postsUrl: PropTypes.string.isRequired,
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  newPost: PropTypes.shape({
    description: PropTypes.string.isRequired,
    postPhoto: PropTypes.string,
    tags: PropTypes.string,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default PostsPage;
