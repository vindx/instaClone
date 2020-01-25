import React from 'react';
import Header from '../../shares/components/Header/Header';
import Profile from './components/Profile/Profile';

const ProfilePage = props => (
  <>
    <Header />
    <Profile userNameUrl={props.match.params.userName} />
  </>
);

export default ProfilePage;
