import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'proptypes';

import ProfileHeaderContainer from './ProfileHeader/ProfileHeaderContainer';
import ProfilePostsContainer from './ProfilePosts/ProfilePostsContainer';
import { turnOffViewMode, takeUserData } from '../../../../redux/actions/profileActions';
import withAdminAuthRedirect from '../../../../hoc/withAdminAuthRedirect';
import BigPreloader from '../../../../shares/components/Preloaders/BigPreloader/BigPreloader';
import PageNotFound from '../../../../shares/components/PageNotFound/PageNotFound';
import styles from './Profile.module.scss';

const Profile = props => {
  const { takeUserData, turnOffViewMode, isAuth, initIsFetching, userData, userNameUrl } = props;

  useEffect(() => {
    takeUserData(userNameUrl);
  }, [takeUserData, userNameUrl]);

  if (initIsFetching) return <BigPreloader />;

  if (!userNameUrl && !isAuth) {
    return <Redirect to="/" />;
  }
  if (!userNameUrl && isAuth) {
    turnOffViewMode();
  }
  if (!userData) {
    return <PageNotFound />;
  }

  return (
    <div className={styles.profileContainer}>
      <ProfileHeaderContainer userData={userData} />
      <ProfilePostsContainer posts={userData.posts} />
    </div>
  );
};

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  initIsFetching: state.profile.initIsFetching,
  userData: state.profile.data,
});

Profile.propTypes = {
  takeUserData: PropTypes.func.isRequired,
  turnOffViewMode: PropTypes.func.isRequired,
  isAuth: PropTypes.bool.isRequired,
  initIsFetching: PropTypes.bool.isRequired,
  userData: PropTypes.shape({
    posts: PropTypes.array,
  }),
  userNameUrl: PropTypes.string,
};

Profile.defaultProps = {
  userData: null,
  userNameUrl: '',
};

export default compose(
  connect(mapStateToProps, { takeUserData, turnOffViewMode }),
  withAdminAuthRedirect
)(Profile);
