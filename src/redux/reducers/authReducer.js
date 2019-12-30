import { stopSubmit } from 'redux-form';
import UsersApi from '../../serverApiParody/usersApi';

const AUTH_IS_FETCHING = 'AUTH_IS_FETCHING';
const AUTH_ON_ERROR = 'AUTH_ON_ERROR';
const AUTH_ON_SUCCESS = 'AUTH_ON_SUCCESS';
const DE_AUTH = 'DE_AUTH';
const UPDATE_AUTH_USER_DATA = 'UPDATE_AUTH_USER_DATA';
const CHANGE_REMOVE_REQUEST_STATUS = 'CHANGE_REMOVE_REQUEST_STATUS';

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
        error: null,
        data: null,
        isAuth: false,
        activeUser: null,
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

export const authIsFetching = () => ({ type: AUTH_IS_FETCHING });
export const authOnError = error => ({ type: AUTH_ON_ERROR, payload: error });
export const authOnSuccess = userData => ({ type: AUTH_ON_SUCCESS, payload: userData });
export const deAuth = () => ({ type: DE_AUTH });
export const updateAuthUser = userData => ({ type: UPDATE_AUTH_USER_DATA, payload: userData });
export const changeRemoveRequest = () => ({ type: CHANGE_REMOVE_REQUEST_STATUS });

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
            return dispatch(authOnSuccess(response.user));
          }
          localStorage.clear();
        })
      );
    }, 1000);
  });

export const changeRemoveRequestStatus = () =>
  async function(dispatch) {
    dispatch(authIsFetching());
    const activeUser = await dispatch(authMe());
    UsersApi.changeRemoveRequest(activeUser.payload.id).then(response => {
      if (response.responseCode === 200) {
        dispatch(changeRemoveRequest());
      }
    });
  };

export default authReducer;
