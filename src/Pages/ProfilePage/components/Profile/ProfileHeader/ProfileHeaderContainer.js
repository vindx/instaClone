import { connect } from 'react-redux';
import { logOutActionCreator, removeRequestActionCreator } from '../../../../../redux/actions';
import ProfileHeader from './ProfileHeader';

const mapStateToProps = state => {
  const {
    fullName,
    profilePhoto,
    removeRequest: removeRequestStatus,
    userName,
  } = state.state.users.existedUsers.find(user => user.activeNow);
  return {
    profilePhotoUrl: profilePhoto,
    userName,
    fullName,
    removeRequestStatus,
  };
};

const mapDispatchToProps = dispatch => ({
  removeRequest: () => {
    dispatch(removeRequestActionCreator());
  },
  logOut: () => {
    dispatch(logOutActionCreator());
    localStorage.clear();
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileHeader);
