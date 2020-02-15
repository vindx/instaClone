import { createAction } from 'redux-actions';
import { postsApi } from '../../api/api';

export const postsFetchingOnProgress = createAction('POSTS_FETCHING_ON_PROGRESS');
export const postsFetchingOnError = createAction('POSTS_FETCHING_ON_ERROR', error => error);
export const postsFetchingOnSuccess = createAction(
  'POSTS_FETCHING_ON_SUCCESS',
  (posts, hasMore) => ({ posts, hasMore })
);
export const clearData = createAction('POSTS_CLEAR_DATA');

const setLikeOnPostsAfterResponse = (dispatch, response, userId) => {
  if (response.status === 200) {
    const postsWithLikes = response.data.posts.results.map(post => {
      if (post.likes.includes(userId)) {
        return { ...post, wasLiked: true };
      }
      return { ...post, wasLiked: false };
    });
    dispatch(postsFetchingOnSuccess(postsWithLikes, Boolean(response.data.posts.next)));
  } else {
    dispatch(postsFetchingOnError(response.data.msg));
  }
};

export const getAllPosts = (userId, page) => async dispatch => {
  dispatch(postsFetchingOnProgress());
  const response = await postsApi.getAllPosts(localStorage.activeUser, page);
  setLikeOnPostsAfterResponse(dispatch, response, userId);
};

export const getPostsByTag = (userId, tagId) => async dispatch => {
  dispatch(postsFetchingOnProgress());
  const response = await postsApi.getPostsByTag(localStorage.activeUser, tagId);
  setLikeOnPostsAfterResponse(dispatch, response, userId);
};

export const addPost = createAction('ADD_POST', post => post);

export const changePostsWithLikedPost = createAction(
  'PUT_LIKE_ON_POST',
  (postId, byWhom, wasLiked) => ({ postId, byWhom, wasLiked })
);
export const likeFetchingToggle = createAction('LIKE_FETCHING_TOGGLE', (isFetching, postId) => ({
  isFetching,
  postId,
}));

export const putLikeOnPost = postId => async dispatch => {
  dispatch(likeFetchingToggle(true, postId));
  const response = await postsApi.putLikeOnPost(localStorage.activeUser, postId);
  if (response.status === 200) {
    const { byWhom, wasLiked } = response.data;
    dispatch(changePostsWithLikedPost(postId, byWhom, wasLiked));
  }
  dispatch(likeFetchingToggle(false, postId));
};
