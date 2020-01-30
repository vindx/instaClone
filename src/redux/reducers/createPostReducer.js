import { stopSubmit } from 'redux-form';
import { postsApi } from '../../api/api';
import {
  CREATE_POST_FETCHING_ON_ERROR,
  CREATE_POST_FETCHING_ON_PROGRESS,
  CREATE_POST_FETCHING_ON_SUCCESS,
  CREATE_POST_FORM_IS_OPEN,
} from '../../shares/constants/constants';
import {
  createPostFetchingOnError,
  createPostFetchingOnProgress,
  createPostFetchingOnSuccess,
} from '../actions/createPostActions';
import { addPost } from '../actions/postsActions';

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

export const createPost = ({ postPhoto = '', description, tags = '' }) => async dispatch => {
  dispatch(createPostFetchingOnProgress());
  const response = await postsApi.createPost(localStorage.activeUser, postPhoto, description, tags);
  if (response.status === 201) {
    response.data.post.wasLiked = false;
    dispatch(addPost(response.data.post));
    dispatch(createPostFetchingOnSuccess());
  } else {
    dispatch(
      stopSubmit('createPostForm', {
        _error: 'Something went wrong! Try again later.',
      })
    );
    dispatch(createPostFetchingOnError());
  }
};

export default createPostReducer;
