import React from 'react';
import PropTypes from 'proptypes';

import Header from '../../shares/components/Header/Header';
import Profile from './components/Profile/Profile';
import CreatePostForm from '../../shares/components/CreatePostForm/CreatePostForm';

const ProfilePage = props => {
  const { postsUrl } = props;

  return (
    <>
      <Header postsUrl={postsUrl} />
      <Profile />
      <CreatePostForm />
    </>
  );
};

ProfilePage.propTypes = {
  postsUrl: PropTypes.string.isRequired,
};

export default ProfilePage;
