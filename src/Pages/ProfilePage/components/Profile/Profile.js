import React from 'react';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';

import ProfileHeaderContainer from './ProfileHeader/ProfileHeaderContainer';
import ProfilePostsContainer from './ProfilePosts/ProfilePostsContainer';
import {
  stopInitAndTurnOffViewMode,
  takeUserData,
} from '../../../../redux/reducers/profileReducer';
import withAdminAuthRedirect from '../../../../hoc/withAdminAuthRedirect';
import BigPreloader from '../../../../shares/components/Preloaders/BigPreloader/BigPreloader';
import PageNotFound from '../../../../shares/components/PageNotFound/PageNotFound';
import styles from './Profile.module.scss';

class Profile extends React.Component {
  componentDidMount() {
    const userName = this.props.userNameUrl;
    if (userName) {
      if (userName !== this.props.activeUser) {
        this.props.takeUserData(userName);
      } else this.props.stopInitAndTurnOffViewMode();
    }
  }

  render() {
    if (!this.props.userNameUrl && !this.props.activeUserData) return <Redirect to="/" />;
    if (!this.props.userNameUrl && this.props.activeUserData) {
      this.props.stopInitAndTurnOffViewMode();
    }
    if (this.props.initIsFetching) return <BigPreloader />;
    if (
      this.props.userNameUrl &&
      this.props.userNameUrl !== this.props.activeUser &&
      !this.props.viewUserData
    ) {
      return <PageNotFound />;
    }
    return (
      <div className={styles.profileContainer}>
        <ProfileHeaderContainer
          userData={
            this.props.userNameUrl && this.props.userNameUrl !== this.props.activeUser
              ? this.props.viewUserData
              : this.props.activeUserData
          }
        />
        <ProfilePostsContainer
          posts={
            this.props.userNameUrl && this.props.userNameUrl !== this.props.activeUser
              ? this.props.viewUserData.posts
              : this.props.activeUserData.posts
          }
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  activeUser: state.auth.activeUser,
  initIsFetching: state.profile.initIsFetching,
  viewUserData: state.profile.data,
  activeUserData: state.auth.data,
});

export default compose(
  connect(mapStateToProps, { takeUserData, stopInitAndTurnOffViewMode }),
  withAdminAuthRedirect
)(Profile);
