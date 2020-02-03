import { handleActions } from 'redux-actions';
import {
  changeRemoveRequest,
  deleteUserData,
  postDeletingOnError,
  postDeletingOnSuccess,
  postDeletingToggle,
  profileInitToggle,
  removeRequestToggle,
  setUserData,
  viewModeToggle,
} from '../actions/profileActions';

const defaultState = {
  initIsFetching: true,
  removeRequestIsFetching: false,
  deleteIsFetching: [],
  error: null,
  data: null,
  viewMode: false,
};

const profileReducer = handleActions(
  {
    [profileInitToggle]: (state, action) => ({ ...state, initIsFetching: action.payload }),
    [postDeletingToggle]: (state, action) => ({
      ...state,
      deleteIsFetching: action.payload.isFetching
        ? [...state.deleteIsFetching, action.payload.postId]
        : [...state.deleteIsFetching.filter(id => id !== action.payload.postId)],
    }),
    [postDeletingOnSuccess]: (state, action) => ({
      ...state,
      error: null,
      data: {
        ...state.data,
        posts: state.data.posts.filter(({ _id: id }) => id !== action.payload),
      },
    }),
    [postDeletingOnError]: (state, action) => ({ ...state, error: action.payload }),
    [setUserData]: (state, action) => ({ ...state, error: null, data: { ...action.payload } }),
    [deleteUserData]: state => ({ ...state, data: null }),
    [viewModeToggle]: (state, action) => ({ ...state, viewMode: action.payload }),
    [removeRequestToggle]: (state, action) => ({
      ...state,
      removeRequestIsFetching: action.payload,
    }),
    [changeRemoveRequest]: (state, action) => ({
      ...state,
      data: {
        ...state.data,
        removeRequest: action.payload,
      },
    }),
  },
  defaultState
);

export default profileReducer;
