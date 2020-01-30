import {
  DELETE_USER_FETCHING_ON_ERROR,
  DELETE_USER_FETCHING_ON_PROGRESS,
  DELETE_USER_FETCHING_ON_SUCCESS,
  USERS_FETCHING_ON_ERROR,
  USERS_FETCHING_ON_PROGRESS,
  USERS_FETCHING_ON_SUCCESS,
} from '../../shares/constants/constants';

export const usersFetchingOnProgress = () => ({ type: USERS_FETCHING_ON_PROGRESS });
export const usersFetchingOnError = error => ({ type: USERS_FETCHING_ON_ERROR, payload: error });
export const usersFetchingOnSuccess = (users, totalCount) => ({
  type: USERS_FETCHING_ON_SUCCESS,
  payload: { users, totalCount },
});
export const deleteUserFetchingOnProgress = () => ({ type: DELETE_USER_FETCHING_ON_PROGRESS });
export const deleteUserFetchingOnError = error => ({
  type: DELETE_USER_FETCHING_ON_ERROR,
  payload: error,
});
export const deleteUserFetchingOnSuccess = user => ({
  type: DELETE_USER_FETCHING_ON_SUCCESS,
  payload: user,
});
