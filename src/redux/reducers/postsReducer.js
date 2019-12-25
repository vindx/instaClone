import PostsApi from '../../serverApiParody/postsApi';
import { authMe } from './authReducer';

const POSTS_FETCHING_ON_PROGRESS = 'POSTS_FETCHING_ON_PROGRESS';
const POSTS_FETCHING_ON_SUCCESS = 'POSTS_FETCHING_ON_SUCCESS';
const POSTS_FETCHING_ON_ERROR = 'POSTS_FETCHING_ON_ERROR';
const ADD_POST = 'ADD_POST';
const PUT_LIKE_ON_POST = 'PUT_LIKE_ON_POST';
const LIKE_FETCHING_TOGGLE = 'LIKE_FETCHING_TOGGLE';
// const DELETE_POST_FETCHING_ON_PROGRESS = 'DELETE_USER_FETCHING_ON_PROGRESS';
// const DELETE_POST_FETCHING_ON_ERROR = 'DELETE_POST_FETCHING_ON_ERROR';
// const DELETE_POST_FETCHING_ON_SUCCESS = 'DELETE_USER_FETCHING_ON_SUCCESS';

const initialState = {
  initIsFetching: false,
  likeIsFetching: [],
  // deletingIsFetching: false,
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
          posts: [action.payload, ...state.data.posts],
          totalCount: state.data.totalCount + 1,
        },
      };
    case PUT_LIKE_ON_POST:
      return {
        ...state,
        data: {
          ...state.data,
          posts: state.data.posts.map(post => {
            if (post.id === action.payload.id) {
              return {
                ...post,
                likes: [...action.payload.likes],
                wasLiked: action.payload.wasLiked,
              };
            }
            return post;
          }),
        },
      };
    // case DELETE_POST_FETCHING_ON_PROGRESS:
    //   return { ...state, deletingIsFetching: true };
    // case DELETE_POST_FETCHING_ON_ERROR:
    //   return { ...state, deletingIsFetching: false, error: action.payload };
    // case DELETE_POST_FETCHING_ON_SUCCESS:
    //   return { ...state, deletingIsFetching: false, error: null, data: action.payload };
    default:
      return state;
  }
};

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
export const changePostsWithLiedPost = post => ({ type: PUT_LIKE_ON_POST, payload: post });
export const likeFetchingToggle = (isFetching, postId) => ({
  type: LIKE_FETCHING_TOGGLE,
  payload: { isFetching, postId },
});
// export const deletePostFetchingOnProgress = () => ({ type: DELETE_POST_FETCHING_ON_PROGRESS });
// export const deletePostFetchingOnError = error => ({
//   type: DELETE_POST_FETCHING_ON_ERROR,
//   payload: error,
// });
// export const deletePostFetchingOnSuccess = (posts, totalCount) => ({
//   type: DELETE_POST_FETCHING_ON_SUCCESS,
//   payload: { posts, totalCount },
// });

export const getAllPosts = (pageSize, pageNum, userId) => dispatch => {
  dispatch(postsFetchingOnProgress());
  setTimeout(() => {
    PostsApi.getAllPosts(pageSize, pageNum, userId).then(response => {
      if (response.responseCode === 200) {
        dispatch(postsFetchingOnSuccess(response.posts, response.totalCount));
      } else {
        dispatch(postsFetchingOnError(response.error));
      }
    });
  }, 1000);
};

export const putLikeOnPost = postId =>
  async function(dispatch) {
    dispatch(likeFetchingToggle(true, postId));
    const activeUser = await dispatch(authMe());
    PostsApi.putLikeOnPost({ postId, userId: activeUser.payload.userName }).then(response => {
      if (response.responseCode === 200) {
        dispatch(changePostsWithLiedPost(response.post));
      }
      dispatch(likeFetchingToggle(false, postId));
    });
  };

export default postsReducer;
