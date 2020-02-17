import { createAction } from 'redux-actions';
import { postsApi, profileApi } from '../../api/api';

export const profileInitToggle = createAction('PROFILE_INIT_TOGGLE', isFetching => isFetching);
export const setUserData = createAction('SET_USER_DATA', userData => userData);
export const deleteUserData = createAction('DELETE_USER_DATA');
export const viewModeToggle = createAction(
  'VIEW_MODE_TOGGLE',
  viewModeTurnedOn => viewModeTurnedOn
);

export const takeUserData = userName => async dispatch => {
  dispatch(profileInitToggle(true));
  if (!userName) {
    const response = await profileApi.getAuthUser(localStorage.activeUser);
    if (response.status === 200) {
      dispatch(setUserData(response.data));
      dispatch(profileInitToggle(false));
    } else {
      dispatch(profileInitToggle(false));
      dispatch(deleteUserData());
    }
  } else {
    const response = await profileApi.getUserByUserName(userName);
    if (response.status === 200) {
      dispatch(setUserData(response.data));
      dispatch(viewModeToggle(true));
      dispatch(profileInitToggle(false));
    } else {
      dispatch(profileInitToggle(false));
      dispatch(deleteUserData());
    }
  }
};

export const turnOffViewMode = () => dispatch => {
  dispatch(viewModeToggle(false));
};

export const postDeletingToggle = createAction('POST_DELETING_TOGGLE', (isFetching, postId) => ({
  isFetching,
  postId,
}));
export const postDeletingOnSuccess = createAction('POST_DELETING_ON_SUCCESS', postId => postId);
export const postDeletingOnError = createAction('POST_DELETING_ON_ERROR', error => error);

export const deletePost = postId => async dispatch => {
  dispatch(postDeletingToggle(true, postId));
  const response = await postsApi.deletePost(localStorage.activeUser, postId);
  if (response.status === 200) {
    dispatch(postDeletingOnSuccess(postId));
  } else dispatch(postDeletingOnError('SOMETHING WENT WRONG!'));
  dispatch(postDeletingToggle(false, postId));
};

export const removeRequestToggle = createAction('CHANGE_REMOVE_REQUEST_TOGGLE', bool => bool);
export const changeRemoveRequest = createAction('CHANGE_REMOVE_REQUEST_ON_SUCCESS', bool => bool);

export const changeRemoveRequestStatus = () => async dispatch => {
  dispatch(removeRequestToggle(true));
  const response = await profileApi.changeRemoveRequestStatus(localStorage.activeUser);
  if (response.status === 200) {
    dispatch(changeRemoveRequest(response.data));
  }
  dispatch(removeRequestToggle(false));
};
