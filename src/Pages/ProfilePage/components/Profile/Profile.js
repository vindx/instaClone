import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';

import ProfileHeaderContainer from './ProfileHeader/ProfileHeaderContainer';
import ProfilePostsContainer from './ProfilePosts/ProfilePostsContainer';
import {
  turnOffViewMode,
  takeUserData,
} from '../../../../redux/reducers/profileReducer';
import withAdminAuthRedirect from '../../../../hoc/withAdminAuthRedirect';
import BigPreloader from '../../../../shares/components/Preloaders/BigPreloader/BigPreloader';
import PageNotFound from '../../../../shares/components/PageNotFound/PageNotFound';
import styles from './Profile.module.scss';

const Profile = props => {
  const userName = props.userNameUrl;

  useEffect(() => {
    props.takeUserData(userName);
  }, [props.takeUserData, userName]);

  if (props.initIsFetching) return <BigPreloader />;

  if (!userName && !props.isAuth) {
    return <Redirect to="/" />;
  }
  if (!userName && props.isAuth) {
    props.turnOffViewMode();
  }
  if (!props.userData) {
    return <PageNotFound />;
  }

  return (
    <div className={styles.profileContainer}>
      <ProfileHeaderContainer userData={props.userData} />
      <ProfilePostsContainer posts={props.userData.posts} />
    </div>
  );
};

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  authUserData: state.auth.data,
  initIsFetching: state.profile.initIsFetching,
  userData: state.profile.data,
});

export default compose(
  connect(mapStateToProps, { takeUserData, turnOffViewMode }),
  withAdminAuthRedirect
)(Profile);
