import { stopSubmit } from 'redux-form';
import { createAction } from 'redux-actions';
import { authApi } from '../../api/api';

export const authFetchingToggle = createAction('AUTH_FETCHING_ON_TOGGLE', boolean => boolean);
export const authOnSuccess = createAction('AUTH_ON_SUCCESS', (userId, role) => ({
  userId,
  role,
}));

export const createAccount = ({ email, fullName, userName, password }) => dispatch => {
  dispatch(authFetchingToggle(true));
  authApi.register(email, fullName, userName, password).then(response => {
    if (response.status === 200) {
      localStorage.activeUser = response.data.token;
      dispatch(authOnSuccess(response.data.userId, response.data.role));
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
      localStorage.activeUser = response.data.token;
      dispatch(authOnSuccess(response.data.userId, response.data.role));
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
    dispatch(authOnSuccess(response.data.userId, response.data.role));
  } else {
    localStorage.removeItem('activeUser');
  }
};

export const deAuth = createAction('DE_AUTH');
