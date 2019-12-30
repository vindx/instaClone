import React from 'react';
import Header from '../../shares/components/Header/Header';
import Profile from './components/Profile/Profile';
import CreatePostForm from '../../shares/components/CreatePostForm/CreatePostForm';

const ProfilePage = props => (
  <>
    <Header />
    <Profile userNameUrl={props.match.params.userName} />
    <CreatePostForm />
  </>
);

export default ProfilePage;
