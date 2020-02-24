import { createAction } from 'redux-actions';
import { postsApi } from '../../api/api';

export const whoLikedPostFetchingToggle = createAction(
  'POSTS/WHO_LIKED_POST_FETCHING',
  bool => bool
);
export const takingUsersWhoLikedThePostOnSuccess = createAction(
  'POSTS/WHO_LIKED_POST_ON_SUCCESS',
  data => data
);
export const takingUsersWhoLikedThePostOnError = createAction(
  'POSTS/WHO_LIKED_POST_ON_ERROR',
  error => error
);

export const takeUsersWhoLikedThePost = postId => async dispatch => {
  dispatch(whoLikedPostFetchingToggle(true));
  const response = await postsApi.getUsersWhoLikedThePost(postId);
  if (response.status === 200) {
    dispatch(takingUsersWhoLikedThePostOnSuccess(response.data));
  } else {
    dispatch(takingUsersWhoLikedThePostOnError('Ups! An error! Try again please'));
  }
};

export const clearUsersDataWhoLikedThePost = createAction('POST/WHO_LIKED_POST_CLEAR_DATA');
