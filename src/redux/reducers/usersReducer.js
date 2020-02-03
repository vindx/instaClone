import { handleActions } from 'redux-actions';
import {
  deleteUserFetchingOnError,
  deleteUserFetchingOnProgress,
  deleteUserFetchingOnSuccess,
  usersFetchingOnError,
  usersFetchingOnProgress,
  usersFetchingOnSuccess,
} from '../actions/usersActions';

const defaultState = {
  initIsFetching: false,
  deletingIsFetching: false,
  error: null,
  data: {
    users: [],
    totalCount: 0,
  },
};

const usersReducer = handleActions(
  {
    [usersFetchingOnProgress]: state => ({ ...state, initIsFetching: true }),
    [usersFetchingOnSuccess]: (state, action) => ({
      ...state,
      initIsFetching: false,
      error: null,
      data: { ...state.data, ...action.payload },
    }),
    [usersFetchingOnError]: (state, action) => ({
      ...state,
      initIsFetching: false,
      error: action.payload,
    }),
    [deleteUserFetchingOnProgress]: state => ({ ...state, deletingIsFetching: true }),
    [deleteUserFetchingOnSuccess]: (state, action) => ({
      ...state,
      deletingIsFetching: false,
      data: {
        users: state.data.users.filter(user => user._id !== action.payload._id),
        totalCount: state.data.totalCount - 1,
      },
    }),
    [deleteUserFetchingOnError]: (state, action) => ({
      ...state,
      deletingIsFetching: false,
      error: action.payload,
    }),
  },
  defaultState
);

export default usersReducer;
