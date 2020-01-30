import {
  CREATE_POST_FETCHING_ON_ERROR,
  CREATE_POST_FETCHING_ON_PROGRESS,
  CREATE_POST_FETCHING_ON_SUCCESS,
  CREATE_POST_FORM_IS_OPEN,
} from '../../shares/constants/constants';

export const createPostFetchingOnProgress = () => ({ type: CREATE_POST_FETCHING_ON_PROGRESS });
export const createPostFetchingOnError = error => ({
  type: CREATE_POST_FETCHING_ON_ERROR,
  payload: error,
});
export const createPostFetchingOnSuccess = () => ({ type: CREATE_POST_FETCHING_ON_SUCCESS });
export const openCreatingPostForm = () => ({ type: CREATE_POST_FORM_IS_OPEN });
