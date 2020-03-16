import { handleActions } from 'redux-actions';
import {
  addPost,
  changePostsWithLikedPost,
  likeFetchingToggle,
  postsFetchingOnError,
  postsFetchingOnProgress,
  postsFetchingOnSuccess,
  clearData,
} from '../actions/postsActions';

const defaultState = {
  initIsFetching: false,
  likeIsFetching: [],
  error: null,
  data: {
    posts: [],
    hasMore: false,
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
      data: {
        posts: [...state.data.posts, ...action.payload.posts],
        hasMore: action.payload.hasMore,
      },
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
        posts: [action.payload, ...state.data.posts],
        totalCount: state.data.totalCount + 1,
      },
    }),
    [changePostsWithLikedPost]: (state, action) => {
      const { postId, byWhom, wasLiked } = action.payload;

      return {
        ...state,
        data: {
          ...state.data,
          posts: state.data.posts.map(post => {
            const isCurrentPost = post._id === postId;

            if (isCurrentPost) {
              const likes = wasLiked
                ? [...post.likes, byWhom]
                : post.likes.filter(id => id !== byWhom);
              return { ...post, likes, wasLiked };
            }
            return post;
          }),
        },
      };
    },
    [clearData]: state => ({
      ...state,
      data: {
        posts: [],
        hasMore: false,
      },
    }),
  },
  defaultState
);

export default postsReducer;
