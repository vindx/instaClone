const UPDATE_NEW_USER_INFO = 'UPDATE_NEW_USER_INFO';
const CREATE_ACCOUNT = 'CREATE_ACCOUNT';
const UPDATE_LOGIN_INFO = 'UPDATE_LOGIN_INFO';
const LOGIN_CHECK = 'LOGIN_CHECK';
const LOGOUT = 'LOGOUT';
const REMOVE_REQUEST = 'REMOVE_REQUEST';
const UPDATE_NEW_POST_INFO = 'UPDATE_NEW_POST_INFO';
const CREATE_NEW_POST = 'CREATE_NEW_POST';
const DELETE_POST = 'DELETE_POST';
const GET_LIKES_STATUS = 'GET_LIKES_STATUS';
const PUT_LIKE_ON_POST = 'PUT_LIKE_ON_POST';
const DELETE_ACCOUNT = 'DELETE_ACCOUNT';

export const updateNewUserInfoActionCreator = ({ email, fullName, userName, password }) => ({
  type: UPDATE_NEW_USER_INFO,
  email,
  fullName,
  userName,
  password,
});
export const createAccountActionCreator = () => ({ type: CREATE_ACCOUNT });
export const updateLoginInfoActionCreator = ({ emailOrUserName, password }) => ({
  type: UPDATE_LOGIN_INFO,
  emailOrUserName,
  password,
});
export const loginCheckActionCreator = () => ({ type: LOGIN_CHECK });
export const logOutActionCreator = () => ({ type: LOGOUT });
export const removeRequestActionCreator = () => ({ type: REMOVE_REQUEST });
export const updateNewPostInfoActionCreator = ({ postPhoto, description }) => ({
  type: UPDATE_NEW_POST_INFO,
  postPhoto,
  description,
});

export const createNewPostActionCreator = () => ({ type: CREATE_NEW_POST });
export const deletePostActionCreator = id => ({ type: DELETE_POST, id });
export const getLikesStatusActionCreator = () => ({ type: GET_LIKES_STATUS });
export const putLikeOnPostActionCreator = id => ({
  type: PUT_LIKE_ON_POST,
  id,
});
export const deleteAccountActionCreator = userName => ({
  type: DELETE_ACCOUNT,
  userName,
});
