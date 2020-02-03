import { createAction } from 'redux-actions';
import { postsApi } from '../../api/api';

export const postsFetchingOnProgress = createAction('POSTS_FETCHING_ON_PROGRESS');
export const postsFetchingOnError = createAction('POSTS_FETCHING_ON_ERROR', error => error);
export const postsFetchingOnSuccess = createAction(
  'POSTS_FETCHING_ON_SUCCESS',
  (posts, totalCount) => ({ posts, totalCount })
);

export const getAllPosts = userId => async dispatch => {
  dispatch(postsFetchingOnProgress());
  const response = await postsApi.getAllPosts(localStorage.activeUser);
  if (response.status === 200) {
    const postsWithLikes = response.data.posts.map(post => {
      if (post.likes.includes(userId)) {
        return { ...post, wasLiked: true };
      }
      return { ...post, wasLiked: false };
    });
    dispatch(postsFetchingOnSuccess(postsWithLikes, postsWithLikes.length));
  } else {
    dispatch(postsFetchingOnError(response.data.msg));
  }
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
