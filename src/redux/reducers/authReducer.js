import { handleActions } from 'redux-actions';
import { authFetchingToggle, authOnSuccess, deAuth } from '../actions/authActions';

const defaultState = {
  isFetching: false,
  data: null,
  isAuth: false,
};

const authReducer = handleActions(
  {
    [authFetchingToggle]: (state, action) => ({
      ...state,
      isFetching: action.payload,
    }),
    [authOnSuccess]: (state, action) => ({
      ...state,
      isFetching: false,
      data: action.payload,
      isAuth: true,
    }),
    [deAuth]: state => ({
      ...state,
      isFetching: false,
      data: null,
      isAuth: false,
    }),
  },
  defaultState
);

export default authReducer;
