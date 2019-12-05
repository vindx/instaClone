import React from 'react';
import PropTypes from 'proptypes';

import Header from '../../shares/components/Header/Header';
import Profile from './components/Profile/Profile';
import CreatePostForm from '../../shares/components/CreatePostForm/CreatePostForm';

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

ProfilePage.propTypes = {
  postsUrl: PropTypes.string.isRequired,
  user: PropTypes.shape({}).isRequired,
  newPost: PropTypes.shape({}).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default ProfilePage;
