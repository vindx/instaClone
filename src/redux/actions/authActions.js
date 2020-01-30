import {
  AUTH_FETCHING_ON_TOGGLE,
  AUTH_ON_SUCCESS,
  DE_AUTH,
} from '../../shares/constants/constants';

export const authFetchingToggle = boolean => ({ type: AUTH_FETCHING_ON_TOGGLE, payload: boolean });
export const authOnSuccess = (userId, role) => ({
  type: AUTH_ON_SUCCESS,
  payload: { userId, role },
});
export const deAuth = () => ({ type: DE_AUTH });
