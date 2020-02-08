import { stopSubmit } from 'redux-form';
import { createAction } from 'redux-actions';
import { postsApi } from '../../api/api';
import { addPost } from './postsActions';
import { deleteExistedTags, deleteSelectedTags } from './tagsAction';

export const createPostFetchingOnProgress = createAction('CREATE_POST_FETCHING_ON_PROGRESS');
export const createPostFetchingOnError = createAction(
  'CREATE_POST_FETCHING_ON_ERROR',
  error => error
);
export const createPostFetchingOnSuccess = createAction('CREATE_POST_FETCHING_ON_SUCCESS');

export const createPost = ({ postPhoto = '', description, tags }) => async dispatch => {
  dispatch(createPostFetchingOnProgress());
  const response = await postsApi.createPost(localStorage.activeUser, postPhoto, description, tags);
  if (response.status === 201) {
    response.data.post.wasLiked = false;
    dispatch(addPost(response.data.post));
    dispatch(createPostFetchingOnSuccess());
    dispatch(deleteExistedTags());
    dispatch(deleteSelectedTags());
  } else {
    dispatch(
      stopSubmit('createPostForm', {
        _error: 'Something went wrong! Try again later.',
      })
    );
    dispatch(createPostFetchingOnError());
  }
};

export const openCreatingPostForm = createAction('CREATE_POST_FORM_IS_OPEN');
