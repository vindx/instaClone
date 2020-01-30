import { createAction } from 'redux-actions';

export const profileInitToggle = createAction('PROFILE_INIT_TOGGLE', isFetching => isFetching);
export const postDeletingToggle = createAction('POST_DELETING_TOGGLE', (isFetching, postId) => ({
  isFetching,
  postId,
}));
export const postDeletingOnError = createAction('POST_DELETING_ON_ERROR', error => error);
export const postDeletingOnSuccess = createAction('POST_DELETING_ON_SUCCESS', postId => postId);
export const setUserData = createAction('SET_USER_DATA', userData => userData);
export const viewModeToggle = createAction(
  'VIEW_MODE_TOGGLE',
  viewModeTurnedOn => viewModeTurnedOn
);
export const deleteUserData = createAction('DELETE_USER_DATA');
export const removeRequestToggle = createAction('CHANGE_REMOVE_REQUEST_TOGGLE', bool => bool);
export const changeRemoveRequest = createAction('CHANGE_REMOVE_REQUEST_ON_SUCCESS', bool => bool);
