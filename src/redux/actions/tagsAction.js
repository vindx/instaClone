import { createAction } from 'redux-actions';
import { tagsApi } from '../../api/api';

export const tagsFindingToggle = createAction('TAGS/FINDING_TOGGLE', bool => bool);
export const tagsFindingOnSuccess = createAction('TAGS/FINDING_ON_SUCCESS', tags => tags);
export const tagsFindingOnError = createAction('TAGS/FINDING_ON_ERROR', error => error);
export const deleteExistedTags = createAction('TAGS/DELETE_EXISTED_TAGS');
export const selectTag = createAction('TAGS/SELECT_TAG', tag => tag);
export const removeSelectedTag = createAction('TAGS/REMOVE_SELECTED_TAG', tag => tag);
export const deleteSelectedTags = createAction('TAGS/DELETE_SELECTED_TAGS');
export const showButton = createAction('TAGS/FULL_COINCIDENCE', bool => bool);

export const findTags = tagName => async dispatch => {
  const response = await tagsApi.find(tagName);
  if (response.status === 200) {
    dispatch(tagsFindingOnSuccess(response.data.tags));
    if (!response.data.tags.find(tag => tag.tagName === tagName)) {
      dispatch(showButton(true));
    }
  } else {
    dispatch(tagsFindingOnError(response.data.msg));
  }
};

export const createTagAC = createAction('TAGS/CREATE_TAG', tag => tag);

export const createTag = tagName => async dispatch => {
  dispatch(tagsFindingToggle(true));
  const response = await tagsApi.create(localStorage.activeUser, tagName);
  if (response.status === 201) {
    dispatch(tagsFindingToggle(false));
    dispatch(createTagAC(response.data.tag));
    dispatch(showButton(false));
  }
};
