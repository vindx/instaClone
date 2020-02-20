import { createAction } from 'redux-actions';
import { profileApi } from '../../api/api';

export const photoOptionFetchingToggle = createAction('PHOTO_OPTION_FETCHING_TOGGLE', bool => bool);
export const uploadProfilePhotoOnSuccess = createAction(
  'UPLOAD_PROFILE_PHOTO_ON_SUCCESS',
  profilePhoto => profilePhoto
);
export const uploadProfilePhotoOnError = createAction(
  'UPLOAD_PROFILE_PHOTO_ON_ERROR',
  error => error
);

export const uploadProfilePhoto = file => async dispatch => {
  dispatch(photoOptionFetchingToggle(true));
  const response = await profileApi.uploadPhoto(localStorage.activeUser, file);
  if (response.status === 200) {
    dispatch(uploadProfilePhotoOnSuccess(response.data.profilePhoto));
  } else {
    dispatch(uploadProfilePhotoOnError(response.data.errors[0].msg));
  }
};

export const profilePhotoOptionsMenuIsOpen = createAction('PROFILE_PHOTO_OPTIONS_MENU_IS_OPEN');

export const deleteProfilePhoto = () => async dispatch => {
  dispatch(photoOptionFetchingToggle(true));
  const response = await profileApi.deleteProfilePhoto(localStorage.activeUser);
  if (response.status === 200) {
    dispatch(uploadProfilePhotoOnSuccess(response.data.profilePhoto));
  } else {
    dispatch(uploadProfilePhotoOnError(response.data.msg));
  }
};
