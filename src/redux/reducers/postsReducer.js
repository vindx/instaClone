import PostsApi from '../../serverApiParody/postsApi';

const POSTS_FETCHING_ON_PROGRESS = 'POSTS_FETCHING_ON_PROGRESS';
const POSTS_FETCHING_ON_SUCCESS = 'POSTS_FETCHING_ON_SUCCESS';
const POSTS_FETCHING_ON_ERROR = 'POSTS_FETCHING_ON_ERROR';
const UPDATE_POSTS = 'UPDATE_POSTS';
// const CREATE_POST_FETCHING_ON_PROGRESS = 'DELETE_USER_FETCHING_ON_PROGRESS';
// const CREATE_POST_FETCHING_ON_ERROR = 'CREATE_POST_FETCHING_ON_ERROR';
// const CREATE_POST_FETCHING_ON_SUCCESS = 'DELETE_USER_FETCHING_ON_SUCCESS';
// const DELETE_POST_FETCHING_ON_PROGRESS = 'DELETE_USER_FETCHING_ON_PROGRESS';
// const DELETE_POST_FETCHING_ON_ERROR = 'DELETE_POST_FETCHING_ON_ERROR';
// const DELETE_POST_FETCHING_ON_SUCCESS = 'DELETE_USER_FETCHING_ON_SUCCESS';

const initialState = {
  initIsFetching: false,
  // creatingIsFetching: false,
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
    case UPDATE_POSTS:
      return {
        ...state,
        data: { ...state.data, ...action.payload },
      };
    // case CREATE_POST_FETCHING_ON_PROGRESS:
    //   return { ...state, creatingIsFetching: true };
    // case CREATE_POST_FETCHING_ON_ERROR:
    //   return { ...state, creatingIsFetching: false, error: action.payload };
    // case CREATE_POST_FETCHING_ON_SUCCESS:
    //   return { ...state, creatingIsFetching: false, error: null, data: action.payload };
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
export const updatePosts = (posts, totalCount) => ({
  type: UPDATE_POSTS,
  payload: { posts, totalCount },
});
// export const createPostFetchingOnProgress = () => ({ type: CREATE_POST_FETCHING_ON_PROGRESS });
// export const createPostFetchingOnError = error => ({
//   type: CREATE_POST_FETCHING_ON_ERROR,
//   payload: error,
// });
// export const createPostFetchingOnSuccess = (posts, totalCount) => ({
//   type: CREATE_POST_FETCHING_ON_SUCCESS,
//   payload: { posts, totalCount },
// });

// export const deletePostFetchingOnProgress = () => ({ type: DELETE_POST_FETCHING_ON_PROGRESS });
// export const deletePostFetchingOnError = error => ({
//   type: DELETE_POST_FETCHING_ON_ERROR,
//   payload: error,
// });
// export const deletePostFetchingOnSuccess = (posts, totalCount) => ({
//   type: DELETE_POST_FETCHING_ON_SUCCESS,
//   payload: { posts, totalCount },
// });

export const getAllPosts = () => dispatch => {
  dispatch(postsFetchingOnProgress());
  setTimeout(() => {
    PostsApi.getAllPosts().then(response => {
      if (response.responseCode === 200) {
        dispatch(postsFetchingOnSuccess(response.posts, response.totalCount));
      } else {
        dispatch(postsFetchingOnError(response.error));
      }
    });
  }, 1000);
};

export default postsReducer;
