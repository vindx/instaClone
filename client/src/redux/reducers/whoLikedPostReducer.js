import { handleActions } from 'redux-actions';
import {
  whoLikedPostFetchingToggle,
  takingUsersWhoLikedThePostOnSuccess,
  takingUsersWhoLikedThePostOnError,
  clearUsersDataWhoLikedThePost,
} from '../actions/whoLikedPostActions';

const defaultState = {
  isFetching: false,
  data: [],
  error: null,
};

const whoLikedPostReducer = handleActions(
  {
    [whoLikedPostFetchingToggle]: (state, action) => ({
      ...state,
      isFetching: action.payload,
    }),
    [takingUsersWhoLikedThePostOnSuccess]: (state, action) => ({
      ...state,
      isFetching: false,
      data: action.payload,
      error: null,
    }),
    [takingUsersWhoLikedThePostOnError]: (state, action) => ({
      ...state,
      isFetching: false,
      error: action.payload,
    }),
    [clearUsersDataWhoLikedThePost]: state => ({
      ...state,
      isFetching: false,
      data: [],
      error: null,
    }),
  },
  defaultState
);

export default whoLikedPostReducer;
