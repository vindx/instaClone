import { createAction } from 'redux-actions';

export const postsFetchingOnProgress = createAction('POSTS_FETCHING_ON_PROGRESS');
export const postsFetchingOnError = createAction('POSTS_FETCHING_ON_ERROR', error => error);
export const postsFetchingOnSuccess = createAction(
  'POSTS_FETCHING_ON_SUCCESS',
  (posts, totalCount) => ({ posts, totalCount })
);
export const addPost = createAction('ADD_POST', post => post);
export const changePostsWithLikedPost = createAction(
  'PUT_LIKE_ON_POST',
  (postId, byWhom, wasLiked) => ({ postId, byWhom, wasLiked })
);
export const likeFetchingToggle = createAction('LIKE_FETCHING_TOGGLE', (isFetching, postId) => ({
  isFetching,
  postId,
}));
