import { stopSubmit } from 'redux-form';
import UsersApi from '../../serverApiParody/usersApi';

const AUTH_IS_FETCHING = 'AUTH_IS_FETCHING';
const AUTH_ON_ERROR = 'AUTH_ON_ERROR';
const AUTH_ON_SUCCESS = 'AUTH_ON_SUCCESS';
const DE_AUTH = 'DE_AUTH';

const initialState = {
  isFetching: false,
  error: null,
  data: null,
  isAuth: false,
  activeUser: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_IS_FETCHING:
      return {
        ...state,
        isFetching: true,
      };
    case AUTH_ON_ERROR:
      return { ...state, isFetching: false, error: action.payload };
    case AUTH_ON_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null,
        data: {
          ...action.payload,
        },
        isAuth: true,
        activeUser: action.payload.userName,
      };
    case DE_AUTH:
      return {
        ...state,
        isFetching: false,
        firstInitIsFetching: false,
        error: null,
        data: null,
        isAuth: false,
        activeUser: null,
      };
    default:
      return state;
  }
};

export const authIsFetching = () => ({ type: AUTH_IS_FETCHING });
export const authOnError = error => ({ type: AUTH_ON_ERROR, payload: error });
export const authOnSuccess = userData => ({ type: AUTH_ON_SUCCESS, payload: userData });
export const deAuth = () => ({ type: DE_AUTH });

export const createAccount = ({ email, fullName, userName, password }) => dispatch => {
  dispatch(authIsFetching());
  setTimeout(() => {
    UsersApi.createUser({ email, fullName, userName, password }).then(response => {
      if (response.responseCode === 200) {
        dispatch(authOnSuccess(response.user));
        localStorage.activeUser = response.user.userName;
      } else {
        if (response.responseCode === 10) {
          dispatch(stopSubmit('signUpForm', { email: response.error, _error: response.error }));
        }
        if (response.responseCode === 11) {
          dispatch(stopSubmit('signUpForm', { userName: response.error, _error: response.error }));
        }
        dispatch(authOnError(response.error));
      }
    });
  }, 1000);
};

export const logIn = ({ emailOrUserName, password }) => dispatch => {
  dispatch(authIsFetching());
  setTimeout(() => {
    UsersApi.getUserByLogInInfo({ emailOrUserName, password }).then(response => {
      if (response.responseCode === 200) {
        dispatch(authOnSuccess(response.user));
        localStorage.activeUser = response.user.userName;
      } else {
        dispatch(authOnError(response.error));
      }
    });
  }, 1000);
};

export const authMe = () => dispatch =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(
        UsersApi.getUserByUserName(localStorage.activeUser).then(response => {
          if (response.responseCode === 200) {
            dispatch(authOnSuccess(response.user));
          } else {
            localStorage.clear();
          }
        })
      );
    }, 1000);
  });

export default authReducer;
