import {
  CHANGE_REMOVE_REQUEST_ON_SUCCESS,
  CHANGE_REMOVE_REQUEST_TOGGLE,
  DELETE_USER_DATA,
  POST_DELETING_ON_ERROR,
  POST_DELETING_ON_SUCCESS,
  POST_DELETING_TOGGLE,
  PROFILE_INIT_TOGGLE,
  SET_USER_DATA,
  VIEW_MODE_TOGGLE,
} from '../../shares/constants/constants';

export const profileInitToggle = isFetching => ({ type: PROFILE_INIT_TOGGLE, payload: isFetching });
export const postDeletingToggle = (isFetching, postId) => ({
  type: POST_DELETING_TOGGLE,
  payload: { isFetching, postId },
});
export const postDeletingOnError = error => ({
  type: POST_DELETING_ON_ERROR,
  payload: error,
});
export const postDeletingOnSuccess = postId => ({
  type: POST_DELETING_ON_SUCCESS,
  payload: postId,
});
export const setUserData = userData => ({ type: SET_USER_DATA, payload: userData });
export const viewModeToggle = viewModeTurnedOn => ({
  type: VIEW_MODE_TOGGLE,
  payload: viewModeTurnedOn,
});
export const deleteUserData = () => ({ type: DELETE_USER_DATA });
export const removeRequestToggle = bool => ({ type: CHANGE_REMOVE_REQUEST_TOGGLE, payload: bool });
export const changeRemoveRequest = bool => ({
  type: CHANGE_REMOVE_REQUEST_ON_SUCCESS,
  payload: bool,
});
