import React from 'react';
import PropTypes from 'proptypes';

import Header from '../../shares/components/Header/Header';
import Profile from './components/Profile/Profile';
import CreatePostForm from '../../shares/components/CreatePostForm/CreatePostForm';

const ProfilePage = props => {
  const { state, postsUrl, dispatch } = props;

  return (
    <>
      <Header postsUrl={postsUrl} />
      <Profile state={state} dispatch={dispatch} />
      <CreatePostForm state={state} dispatch={dispatch} />
    </>
  );
};

ProfilePage.propTypes = {
  postsUrl: PropTypes.string.isRequired,
  state: PropTypes.shape({}).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default ProfilePage;
