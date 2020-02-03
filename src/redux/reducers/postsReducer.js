import { handleActions } from 'redux-actions';
import {
  addPost,
  changePostsWithLikedPost,
  likeFetchingToggle,
  postsFetchingOnError,
  postsFetchingOnProgress,
  postsFetchingOnSuccess,
} from '../actions/postsActions';

const defaultState = {
  initIsFetching: false,
  likeIsFetching: [],
  error: null,
  data: {
    posts: [],
    totalCount: 0,
  },
};

const postsReducer = handleActions(
  {
    [postsFetchingOnProgress]: state => ({
      ...state,
      initIsFetching: true,
    }),
    [postsFetchingOnError]: (state, action) => ({
      ...state,
      initIsFetching: false,
      error: action.payload,
    }),
    [postsFetchingOnSuccess]: (state, action) => ({
      ...state,
      initIsFetching: false,
      error: null,
      data: { ...state.data, ...action.payload },
    }),
    [likeFetchingToggle]: (state, action) => ({
      ...state,
      likeIsFetching: action.payload.isFetching
        ? [...state.likeIsFetching, action.payload.postId]
        : [...state.likeIsFetching.filter(id => id !== action.payload.postId)],
    }),
    [addPost]: (state, action) => ({
      ...state,
      data: {
        ...state.data,
        posts: [...state.data.posts, action.payload],
        totalCount: state.data.totalCount + 1,
      },
    }),
    [changePostsWithLikedPost]: (state, action) => ({
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
    }),
  },
  defaultState
);

export default postsReducer;
