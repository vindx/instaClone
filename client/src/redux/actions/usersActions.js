import { createAction } from 'redux-actions';
import { usersApi } from '../../api/api';

export const usersFetchingOnProgress = createAction('USERS_FETCHING_ON_PROGRESS');
export const usersFetchingOnError = createAction('USERS_FETCHING_ON_ERROR', error => error);
export const usersFetchingOnSuccess = createAction(
  'USERS_FETCHING_ON_SUCCESS',
  (users, totalCount) => ({ users, totalCount })
);

export const getAllUsers = () => async dispatch => {
  dispatch(usersFetchingOnProgress());
  const response = await usersApi.getUsers(localStorage.activeUser);
  if (response.status === 200) {
    dispatch(usersFetchingOnSuccess(response.data.users, response.data.users.length));
  } else {
    dispatch(usersFetchingOnError(response.data.msg));
  }
};

export const deleteUserFetchingOnProgress = createAction('DELETE_USER_FETCHING_ON_PROGRESS');
export const deleteUserFetchingOnError = createAction(
  'DELETE_USER_FETCHING_ON_ERROR',
  error => error
);
export const deleteUserFetchingOnSuccess = createAction(
  'DELETE_USER_FETCHING_ON_SUCCESS',
  user => user
);

export const deleteUser = userId => async dispatch => {
  dispatch(deleteUserFetchingOnProgress());
  const response = await usersApi.deleteUser(userId, localStorage.activeUser);
  if (response.status === 200) {
    dispatch(deleteUserFetchingOnSuccess(response.data.removedUser));
  } else {
    dispatch(deleteUserFetchingOnError(response.data.msg));
  }
};
