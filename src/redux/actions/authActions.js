import { createAction } from 'redux-actions';

export const authFetchingToggle = createAction('AUTH_FETCHING_ON_TOGGLE', boolean => boolean);
export const authOnSuccess = createAction('AUTH_ON_SUCCESS', (userId, role) => ({
  userId,
  role,
}));
export const deAuth = createAction('DE_AUTH');
