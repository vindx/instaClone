import { authMe } from './authReducer';
import PostsApi from '../../serverApiParody/postsApi';
import UsersApi from '../../serverApiParody/usersApi';
import { profileApi } from '../../api/api';

const PROFILE_INIT_TOGGLE = 'PROFILE_INIT_TOGGLE';
const POST_DELETING_TOGGLE = 'POST_DELETING_TOGGLE';
const POST_DELETING_ON_ERROR = 'POST_DELETING_ON_ERROR';
const POST_DELETING_ON_SUCCESS = 'POST_DELETING_ON_SUCCESS';
const SET_USER_DATA = 'SET_USER_DATA';
const VIEW_MODE_TOGGLE = 'VIEW_MODE_TOGGLE';
const DELETE_USER_DATA = 'DELETE_USER_DATA';
const CHANGE_REMOVE_REQUEST_TOGGLE = 'CHANGE_REMOVE_REQUEST_TOGGLE';
const CHANGE_REMOVE_REQUEST_ON_SUCCESS = 'CHANGE_REMOVE_REQUEST_ON_SUCCESS';

const initialState = {
  initIsFetching: true,
  removeRequestIsFetching: false,
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
    case DELETE_USER_DATA:
      return {
        ...state,
        data: null,
      };
    case CHANGE_REMOVE_REQUEST_TOGGLE:
      return { ...state, removeRequestIsFetching: action.payload };
    case CHANGE_REMOVE_REQUEST_ON_SUCCESS:
      return {
        ...state,
        data: {
          ...state.data,
          removeRequest: action.payload,
        },
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
export const deleteUserData = () => ({ type: DELETE_USER_DATA });
export const removeRequestToggle = bool => ({ type: CHANGE_REMOVE_REQUEST_TOGGLE, payload: bool });
export const changeRemoveRequest = bool => ({
  type: CHANGE_REMOVE_REQUEST_ON_SUCCESS,
  payload: bool,
});

export const takeUserData = userName => async dispatch => {
  dispatch(profileInitToggle(true));
  if (!userName) {
    const response = await profileApi.getAuthUser(localStorage.activeUser);
    if (response.status === 200) {
      dispatch(setUserData(response.data));
      dispatch(profileInitToggle(false));
    }
  } else {
    const response = await profileApi.getUserByUserName(userName);
    if (response.status === 200) {
      dispatch(setUserData(response.data));
      dispatch(viewModeToggle(true));
      dispatch(profileInitToggle(false));
    } else {
      dispatch(profileInitToggle(false));
      dispatch(deleteUserData());
    }
  }
};

export const changeRemoveRequestStatus = () => async dispatch => {
  dispatch(removeRequestToggle(true));
  const response = await profileApi.changeRemoveRequestStatus(localStorage.activeUser);
  if (response.status === 200) {
    dispatch(changeRemoveRequest(response.data));
  }
  dispatch(removeRequestToggle(false));
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
        // dispatch(updateAuthUser(responses[1].user));
        dispatch(postDeletingOnSuccess());
      } else dispatch(postDeletingOnError('SOMETHING WENT WRONG!'));
      dispatch(postDeletingToggle(false, postId));
    });
  };

export const turnOffViewMode = () => dispatch => {
  dispatch(viewModeToggle(false));
};

export default profileReducer;
