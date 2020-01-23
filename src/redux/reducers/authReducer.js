import { stopSubmit } from 'redux-form';
import UsersApi from '../../serverApiParody/usersApi';
import { authApi } from '../../api/api';

const AUTH_FETCHING_ON_TOGGLE = 'AUTH_FETCHING_ON_TOGGLE';
const AUTH_ON_SUCCESS = 'AUTH_ON_SUCCESS';
const DE_AUTH = 'DE_AUTH';
const UPDATE_AUTH_USER_DATA = 'UPDATE_AUTH_USER_DATA';
const CHANGE_REMOVE_REQUEST_STATUS = 'CHANGE_REMOVE_REQUEST_STATUS';

const initialState = {
  isFetching: false,
  data: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_FETCHING_ON_TOGGLE:
      return {
        ...state,
        isFetching: action.payload,
      };
    case AUTH_ON_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
        isAuth: true,
      };
    case DE_AUTH:
      return {
        ...state,
        isFetching: false,
        error: null,
        data: null,
        isAuth: false,
      };
    case UPDATE_AUTH_USER_DATA:
      return {
        ...state,
        data: {
          ...action.payload,
        },
      };
    case CHANGE_REMOVE_REQUEST_STATUS:
      return {
        ...state,
        isFetching: false,
        data: {
          ...state.data,
          removeRequest: !state.data.removeRequest,
        },
      };
    default:
      return state;
  }
};

export const authFetchingToggle = boolean => ({ type: AUTH_FETCHING_ON_TOGGLE, payload: boolean });
export const authOnSuccess = (userId, role) => ({
  type: AUTH_ON_SUCCESS,
  payload: { userId, role },
});
export const deAuth = () => ({ type: DE_AUTH });
export const updateAuthUser = userData => ({ type: UPDATE_AUTH_USER_DATA, payload: userData });
export const changeRemoveRequest = () => ({ type: CHANGE_REMOVE_REQUEST_STATUS });

export const createAccount = ({ email, fullName, userName, password }) => dispatch => {
  dispatch(authFetchingToggle(true));
  authApi.register(email, fullName, userName, password).then(response => {
    if (response.status === 200) {
      dispatch(authOnSuccess(response.data.userId, response.data.role));
      localStorage.activeUser = response.data.token;
    } else {
      if (response.data.errorFiled === 'email') {
        // stopSubmit doesnt work with async func :(
        dispatch(stopSubmit('signUpForm', { email: response.data.msg, _error: response.data.msg }));
      }
      if (response.data.errorFiled === 'userName') {
        dispatch(
          stopSubmit('signUpForm', { userName: response.data.msg, _error: response.data.msg })
        );
      }
      dispatch(authFetchingToggle(false));
    }
  });
};

export const logIn = ({ emailOrUserName, password }) => dispatch => {
  dispatch(authFetchingToggle(true));
  authApi.login(emailOrUserName, password).then(response => {
    if (response.status === 200) {
      dispatch(authOnSuccess(response.data.userId, response.data.role));
      localStorage.activeUser = response.data.token;
    } else {
      if (response.data.errorFiled === 'userName') {
        dispatch(
          stopSubmit('logInForm', { emailOrUserName: response.data.msg, _error: response.data.msg })
        );
      }
      if (response.data.errorFiled === 'password') {
        dispatch(
          stopSubmit('logInForm', { password: response.data.msg, _error: response.data.msg })
        );
      }
      dispatch(authFetchingToggle(false));
    }
  });
};

export const authMe = () => async dispatch => {
  const response = await authApi.authMe(localStorage.activeUser);
  if (response.status === 200) {
    return dispatch(authOnSuccess(response.data.userId, response.data.role));
  }
  localStorage.removeItem('activeUser');
};

export const changeRemoveRequestStatus = () =>
  async function(dispatch) {
    dispatch(authFetchingToggle(true));
    const activeUser = await dispatch(authMe());
    UsersApi.changeRemoveRequest(activeUser.payload.id).then(response => {
      if (response.responseCode === 200) {
        dispatch(changeRemoveRequest());
      }
    });
  };

export default authReducer;
