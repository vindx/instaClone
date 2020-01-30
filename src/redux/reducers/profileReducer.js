import { postsApi, profileApi } from '../../api/api';
import {
  CHANGE_REMOVE_REQUEST_ON_SUCCESS,
  CHANGE_REMOVE_REQUEST_TOGGLE,
  DELETE_USER_DATA,
  POST_DELETING_ON_ERROR,
  POST_DELETING_ON_SUCCESS,
  POST_DELETING_TOGGLE,
  PROFILE_INIT_TOGGLE,
  SET_USER_DATA,
  VIEW_MODE_TOGGLE,
} from '../../shares/constants/constants';
import {
  changeRemoveRequest,
  deleteUserData,
  postDeletingOnError,
  postDeletingOnSuccess,
  postDeletingToggle,
  profileInitToggle,
  removeRequestToggle,
  setUserData,
  viewModeToggle,
} from '../actions/profileActions';

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
      return {
        ...state,
        error: null,
        data: {
          ...state.data,
          posts: state.data.posts.filter(({ _id: id }) => id !== action.payload),
        },
      };
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

export const takeUserData = userName => async dispatch => {
  dispatch(profileInitToggle(true));
  if (!userName) {
    const response = await profileApi.getAuthUser(localStorage.activeUser);
    if (response.status === 200) {
      dispatch(setUserData(response.data));
      dispatch(profileInitToggle(false));
    } else {
      dispatch(profileInitToggle(false));
      dispatch(deleteUserData());
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

export const deletePost = postId => async dispatch => {
  dispatch(postDeletingToggle(true, postId));
  const response = await postsApi.deletePost(localStorage.activeUser, postId);
  if (response.status === 200) {
    dispatch(postDeletingOnSuccess(postId));
  } else dispatch(postDeletingOnError('SOMETHING WENT WRONG!'));
  dispatch(postDeletingToggle(false, postId));
};

export const turnOffViewMode = () => dispatch => {
  dispatch(viewModeToggle(false));
};

export default profileReducer;
