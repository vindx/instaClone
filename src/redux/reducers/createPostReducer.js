import { stopSubmit } from 'redux-form';
import UsersApi from '../../serverApiParody/usersApi';
import PostsApi from '../../serverApiParody/postsApi';
import { authMe, updateAuthUser } from './authReducer';
import { addPost, postsFetchingOnProgress } from './postsReducer';

const generateID = () =>
  Math.random()
    .toString(36)
    .substr(2, 10);

const CREATE_POST_FETCHING_ON_PROGRESS = 'CREATE_POST_FETCHING_ON_PROGRESS';
const CREATE_POST_FETCHING_ON_ERROR = 'CREATE_POST_FETCHING_ON_ERROR';
const CREATE_POST_FETCHING_ON_SUCCESS = 'CREATE_POST_FETCHING_ON_SUCCESS';
const CREATE_POST_FORM_IS_OPEN = 'CREATE_POST_FORM_IS_OPEN';

const initialState = {
  isFetching: false,
  error: null,
  success: false,
};

const createPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST_FORM_IS_OPEN:
      return {
        ...state,
        success: false,
      };
    case CREATE_POST_FETCHING_ON_PROGRESS:
      return {
        ...state,
        isFetching: true,
      };
    case CREATE_POST_FETCHING_ON_ERROR:
      return {
        ...state,
        isFetching: false,
        success: false,
        error: action.payload,
      };
    case CREATE_POST_FETCHING_ON_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null,
        success: true,
      };
    default:
      return state;
  }
};

export const createPostFetchingOnProgress = () => ({ type: CREATE_POST_FETCHING_ON_PROGRESS });
export const createPostFetchingOnError = error => ({
  type: CREATE_POST_FETCHING_ON_ERROR,
  payload: error,
});
export const createPostFetchingOnSuccess = () => ({ type: CREATE_POST_FETCHING_ON_SUCCESS });
export const openCreatingPostForm = () => ({ type: CREATE_POST_FORM_IS_OPEN });

export const createPost = ({ postPhoto = '', description, tags = '' }) =>
  async function(dispatch) {
    const postId = generateID();
    dispatch(createPostFetchingOnProgress());
    const activeUser = await dispatch(authMe());
    Promise.all([
      PostsApi.createPost({
        postPhoto,
        description,
        tags,
        authUser: activeUser.payload,
        postId,
      }),
      UsersApi.createPost({
        postPhoto,
        description,
        tags,
        userId: activeUser.payload.id,
        postId,
      }),
    ]).then(responses => {
      if (responses.every(({ responseCode }) => responseCode === 200)) {
        dispatch(addPost(responses[0].post));
        dispatch(updateAuthUser(responses[1].user));
        dispatch(createPostFetchingOnSuccess());
      } else {
        dispatch(
          stopSubmit('createPostForm', {
            _error: 'Something went wrong! Try again later.',
          })
        );
        dispatch(createPostFetchingOnError());
      }
    });
  };

export default createPostReducer;