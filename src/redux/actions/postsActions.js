import {
  ADD_POST,
  LIKE_FETCHING_TOGGLE,
  POSTS_FETCHING_ON_ERROR,
  POSTS_FETCHING_ON_PROGRESS,
  POSTS_FETCHING_ON_SUCCESS,
  PUT_LIKE_ON_POST,
} from '../../shares/constants/constants';

export const postsFetchingOnProgress = () => ({ type: POSTS_FETCHING_ON_PROGRESS });
export const postsFetchingOnError = error => ({ type: POSTS_FETCHING_ON_ERROR, payload: error });
export const postsFetchingOnSuccess = (posts, totalCount) => ({
  type: POSTS_FETCHING_ON_SUCCESS,
  payload: { posts, totalCount },
});
export const addPost = post => ({
  type: ADD_POST,
  payload: post,
});
export const changePostsWithLiedPost = (postId, byWhom, wasLiked) => ({
  type: PUT_LIKE_ON_POST,
  payload: { postId, byWhom, wasLiked },
});
export const likeFetchingToggle = (isFetching, postId) => ({
  type: LIKE_FETCHING_TOGGLE,
  payload: { isFetching, postId },
});
