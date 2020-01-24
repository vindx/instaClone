import { usersApi } from '../../api/api';

const USERS_FETCHING_ON_PROGRESS = 'USERS_FETCHING_ON_PROGRESS';
const USERS_FETCHING_ON_SUCCESS = 'USERS_FETCHING_ON_SUCCESS';
const USERS_FETCHING_ON_ERROR = 'USERS_FETCHING_ON_ERROR';
const DELETE_USER_FETCHING_ON_PROGRESS = 'DELETE_USER_FETCHING_ON_PROGRESS';
const DELETE_USER_FETCHING_ON_SUCCESS = 'DELETE_USER_FETCHING_ON_SUCCESS';
const DELETE_USER_FETCHING_ON_ERROR = 'DELETE_USER_FETCHING_ON_ERROR';

const initialState = {
  initIsFetching: false,
  deletingIsFetching: false,
  error: null,
  data: {
    users: [],
    totalCount: 0,
  },
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERS_FETCHING_ON_PROGRESS:
      return { ...state, initIsFetching: true };
    case USERS_FETCHING_ON_ERROR:
      return { ...state, initIsFetching: false, error: action.payload };
    case USERS_FETCHING_ON_SUCCESS:
      return {
        ...state,
        initIsFetching: false,
        error: null,
        data: { ...state.data, ...action.payload },
      };
    case DELETE_USER_FETCHING_ON_PROGRESS:
      return { ...state, deletingIsFetching: true };
    case DELETE_USER_FETCHING_ON_ERROR:
      return { ...state, deletingIsFetching: false, error: action.payload };
    case DELETE_USER_FETCHING_ON_SUCCESS:
      return {
        ...state,
        deletingIsFetching: false,
        data: {
          users: state.data.users.filter(user => user._id !== action.payload._id),
          totalCount: state.data.totalCount - 1,
        },
      };
    default:
      return state;
  }
};

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

export const getAllUsers = () => async dispatch => {
  dispatch(usersFetchingOnProgress());
  const response = await usersApi.getUsers(localStorage.activeUser);
  if (response.status === 200) {
    dispatch(usersFetchingOnSuccess(response.data.users, response.data.users.length));
  } else {
    dispatch(usersFetchingOnError(response.data.msg));
  }
};

export const deleteUser = userId => async dispatch => {
  dispatch(deleteUserFetchingOnProgress());
  const response = await usersApi.deleteUser(userId);
  if (response.status === 200) {
    dispatch(deleteUserFetchingOnSuccess(response.data.removedUser));
  } else {
    dispatch(deleteUserFetchingOnError(response.data.msg));
  }
};

export default usersReducer;
