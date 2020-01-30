import { postsApi } from '../../api/api';
import {
  ADD_POST,
  LIKE_FETCHING_TOGGLE,
  POSTS_FETCHING_ON_ERROR,
  POSTS_FETCHING_ON_PROGRESS,
  POSTS_FETCHING_ON_SUCCESS,
  PUT_LIKE_ON_POST,
} from '../../shares/constants/constants';
import {
  changePostsWithLikedPost,
  likeFetchingToggle,
  postsFetchingOnError,
  postsFetchingOnProgress,
  postsFetchingOnSuccess,
} from '../actions/postsActions';

const initialState = {
  initIsFetching: false,
  likeIsFetching: [],
  error: null,
  data: {
    posts: [],
    totalCount: 0,
  },
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POSTS_FETCHING_ON_PROGRESS:
      return { ...state, initIsFetching: true };
    case POSTS_FETCHING_ON_ERROR:
      return { ...state, initIsFetching: false, error: action.payload };
    case POSTS_FETCHING_ON_SUCCESS:
      return {
        ...state,
        initIsFetching: false,
        error: null,
        data: { ...state.data, ...action.payload },
      };
    case LIKE_FETCHING_TOGGLE:
      return {
        ...state,
        likeIsFetching: action.payload.isFetching
          ? [...state.likeIsFetching, action.payload.postId]
          : [...state.likeIsFetching.filter(id => id !== action.payload.postId)],
      };
    case ADD_POST:
      return {
        ...state,
        data: {
          ...state.data,
          posts: [...state.data.posts, action.payload],
          totalCount: state.data.totalCount + 1,
        },
      };
    case PUT_LIKE_ON_POST:
      return {
        ...state,
        data: {
          ...state.data,
          posts: state.data.posts.map(post => {
            if (post._id === action.payload.postId) {
              return {
                ...post,
                likes: action.payload.wasLiked
                  ? [...post.likes, action.payload.byWhom]
                  : post.likes.filter(id => id !== action.payload.byWhom),
                wasLiked: action.payload.wasLiked,
              };
            }
            return post;
          }),
        },
      };
    default:
      return state;
  }
};

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

export const putLikeOnPost = postId => async dispatch => {
  dispatch(likeFetchingToggle(true, postId));
  const response = await postsApi.putLikeOnPost(localStorage.activeUser, postId);
  if (response.status === 200) {
    const { byWhom, wasLiked } = response.data;
    dispatch(changePostsWithLikedPost(postId, byWhom, wasLiked));
  }
  dispatch(likeFetchingToggle(false, postId));
};

export default postsReducer;
