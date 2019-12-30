import { authMe, updateAuthUser } from './authReducer';
import PostsApi from '../../serverApiParody/postsApi';
import UsersApi from '../../serverApiParody/usersApi';

const PROFILE_INIT_TOGGLE = 'PROFILE_INIT_TOGGLE';
const POST_DELETING_TOGGLE = 'POST_DELETING_TOGGLE';
const POST_DELETING_ON_ERROR = 'POST_DELETING_ON_ERROR';
const POST_DELETING_ON_SUCCESS = 'POST_DELETING_ON_SUCCESS';
const SET_USER_DATA = 'SET_USER_DATA';
const VIEW_MODE_TOGGLE = 'VIEW_MODE_TOGGLE';

const initialState = {
  initIsFetching: true,
  deleteIsFetching: [],
  error: null,
  data: null,
  viewMode: false,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_INIT_TOGGLE:
      return {
        ...state,
        initIsFetching: action.payload,
      };
    case POST_DELETING_TOGGLE:
      return {
        ...state,
        deleteIsFetching: action.payload.isFetching
          ? [...state.deleteIsFetching, action.payload.postId]
          : [...state.deleteIsFetching.filter(id => id !== action.payload.postId)],
      };
    case POST_DELETING_ON_ERROR:
      return { ...state, error: action.payload };
    case POST_DELETING_ON_SUCCESS:
      return { ...state, error: null };
    case SET_USER_DATA:
      return {
        ...state,
        error: null,
        data: { ...action.payload },
      };
    case VIEW_MODE_TOGGLE:
      return {
        ...state,
        viewMode: action.payload,
      };
    default:
      return state;
  }
};

export const profileInitToggle = isFetching => ({ type: PROFILE_INIT_TOGGLE, payload: isFetching });
export const postDeletingToggle = (isFetching, postId) => ({
  type: POST_DELETING_TOGGLE,
  payload: { isFetching, postId },
});
export const postDeletingOnError = error => ({
  type: POST_DELETING_ON_ERROR,
  payload: error,
});
export const postDeletingOnSuccess = () => ({ type: POST_DELETING_ON_SUCCESS });
export const setUserData = userData => ({ type: SET_USER_DATA, payload: userData });
export const viewModeToggle = viewModeTurnedOn => ({
  type: VIEW_MODE_TOGGLE,
  payload: viewModeTurnedOn,
});

export const takeUserData = userName => dispatch => {
  dispatch(profileInitToggle(true));
  setTimeout(() => {
    UsersApi.getUserByUserName(userName).then(response => {
      if (response.responseCode === 200) {
        dispatch(setUserData(response.user));
        dispatch(viewModeToggle(true));
        dispatch(profileInitToggle(false));
      } else {
        dispatch(profileInitToggle(false));
      }
    });
  }, 1000);
};

export const deletePost = postId =>
  async function(dispatch) {
    dispatch(postDeletingToggle(true, postId));
    const activeUser = await dispatch(authMe());
    Promise.all([
      PostsApi.deletePost(postId),
      UsersApi.deletePost({ userId: activeUser.payload.id, postId }),
    ]).then(responses => {
      if (responses.every(res => res.responseCode === 200)) {
        dispatch(updateAuthUser(responses[1].user));
        dispatch(postDeletingOnSuccess());
      } else dispatch(postDeletingOnError('SOMETHING WENT WRONG!'));
      dispatch(postDeletingToggle(false, postId));
    });
  };

export const stopInitAndTurnOffViewMode = () => dispatch => {
  dispatch(profileInitToggle(false));
  dispatch(viewModeToggle(false));
};

export default profileReducer;
