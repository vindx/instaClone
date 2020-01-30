import { createAction } from 'redux-actions';

export const createPostFetchingOnProgress = createAction('CREATE_POST_FETCHING_ON_PROGRESS');
export const createPostFetchingOnError = createAction(
  'CREATE_POST_FETCHING_ON_ERROR',
  error => error
);
export const createPostFetchingOnSuccess = createAction('CREATE_POST_FETCHING_ON_SUCCESS');
export const openCreatingPostForm = createAction('CREATE_POST_FORM_IS_OPEN');
