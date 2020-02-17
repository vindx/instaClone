import { createAction } from 'redux-actions';
import { authMe } from './authActions';

export const initializeOnSuccess = createAction('APP/INITIALIZE_ON_SUCCESS');

export const initialize = () => async dispatch => {
  await dispatch(authMe());
  dispatch(initializeOnSuccess());
};
