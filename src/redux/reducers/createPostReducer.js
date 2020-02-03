import { handleActions } from 'redux-actions';
import {
  createPostFetchingOnError,
  createPostFetchingOnProgress,
  createPostFetchingOnSuccess,
  openCreatingPostForm,
} from '../actions/createPostActions';

const defaultState = {
  isFetching: false,
  error: null,
  success: false,
};

const createPostReducer = handleActions(
  {
    [createPostFetchingOnProgress]: state => ({ ...state, isFetching: true }),
    [createPostFetchingOnSuccess]: state => ({
      ...state,
      isFetching: false,
      error: null,
      success: true,
    }),
    [createPostFetchingOnError]: (state, action) => ({
      ...state,
      isFetching: false,
      success: false,
      error: action.payload,
    }),
    [openCreatingPostForm]: state => ({ ...state, success: false }),
  },
  defaultState
);

export default createPostReducer;
