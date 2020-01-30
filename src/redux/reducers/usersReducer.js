import { usersApi } from '../../api/api';
import {
  DELETE_USER_FETCHING_ON_ERROR,
  DELETE_USER_FETCHING_ON_PROGRESS,
  DELETE_USER_FETCHING_ON_SUCCESS,
  USERS_FETCHING_ON_ERROR,
  USERS_FETCHING_ON_PROGRESS,
  USERS_FETCHING_ON_SUCCESS,
} from '../../shares/constants/constants';
import {
  deleteUserFetchingOnError,
  deleteUserFetchingOnProgress,
  deleteUserFetchingOnSuccess,
  usersFetchingOnError,
  usersFetchingOnProgress,
  usersFetchingOnSuccess,
} from '../actions/usersActions';

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
  const response = await usersApi.deleteUser(userId, localStorage.activeUser);
  if (response.status === 200) {
    dispatch(deleteUserFetchingOnSuccess(response.data.removedUser));
  } else {
    dispatch(deleteUserFetchingOnError(response.data.msg));
  }
};

export default usersReducer;
