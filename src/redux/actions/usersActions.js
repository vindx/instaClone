import { createAction } from 'redux-actions';

export const usersFetchingOnProgress = createAction('USERS_FETCHING_ON_PROGRESS');
export const usersFetchingOnError = createAction('USERS_FETCHING_ON_ERROR', error => error);
export const usersFetchingOnSuccess = createAction(
  'USERS_FETCHING_ON_SUCCESS',
  (users, totalCount) => ({ users, totalCount })
);
export const deleteUserFetchingOnProgress = createAction('DELETE_USER_FETCHING_ON_PROGRESS');
export const deleteUserFetchingOnError = createAction(
  'DELETE_USER_FETCHING_ON_ERROR',
  error => error
);
export const deleteUserFetchingOnSuccess = createAction(
  'DELETE_USER_FETCHING_ON_SUCCESS',
  user => user
);
