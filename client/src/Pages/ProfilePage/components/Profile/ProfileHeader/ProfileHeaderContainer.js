import { connect } from 'react-redux';

import { changeRemoveRequestStatus } from '../../../../../redux/actions/profileActions';
import ProfileHeader from './ProfileHeader';
import {
  uploadProfilePhoto,
  deleteProfilePhoto,
  profilePhotoOptionsMenuIsOpen,
} from '../../../../../redux/actions/profilePhotoActions';

const mapStateToProps = state => ({
  viewMode: state.profile.viewMode,
  removeRequestIsFetching: state.profile.removeRequestIsFetching,
  profilePhotoOptions: state.profilePhotoOptions,
});

export default connect(mapStateToProps, {
  changeRemoveRequestStatus,
  uploadProfilePhoto,
  deleteProfilePhoto,
  profilePhotoOptionsMenuIsOpen,
})(ProfileHeader);
