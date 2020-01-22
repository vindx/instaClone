import UsersApi from '../../serverApiParody/usersApi';
import PostsApi from '../../serverApiParody/postsApi';
import { getUsers } from '../../api/api';

const USERS_FETCHING_ON_PROGRESS = 'USERS_FETCHING_ON_PROGRESS';
const USERS_FETCHING_ON_SUCCESS = 'USERS_FETCHING_ON_SUCCESS';
const USERS_FETCHING_ON_ERROR = 'USERS_FETCHING_ON_ERROR';
const DELETE_USER_FETCHING_ON_PROGRESS = 'DELETE_USER_FETCHING_ON_PROGRESS';
const DELETE_USER_FETCHING_ON_SUCCESS = 'DELETE_USER_FETCHING_ON_SUCCESS';

const initialState = {
  initIsFetching: false,
  deletingIsFetching: false,
  error: null,
  data: {
    users: [],
    totalCount: 0,
  },
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERS_FETCHING_ON_PROGRESS:
      return { ...state, initIsFetching: true };
    case USERS_FETCHING_ON_ERROR:
      return { ...state, initIsFetching: false, error: action.payload };
    case USERS_FETCHING_ON_SUCCESS:
      return {
        ...state,
        initIsFetching: false,
        error: null,
        data: { ...state.data, ...action.payload },
      };
    case DELETE_USER_FETCHING_ON_PROGRESS:
      return { ...state, deletingIsFetching: true };
    case DELETE_USER_FETCHING_ON_SUCCESS:
      return {
        ...state,
        deletingIsFetching: false,
        data: { ...state.data, ...action.payload },
      };
    default:
      return state;
  }
};

export const usersFetchingOnProgress = () => ({ type: USERS_FETCHING_ON_PROGRESS });
export const usersFetchingOnError = error => ({ type: USERS_FETCHING_ON_ERROR, payload: error });
export const usersFetchingOnSuccess = (users, totalCount) => ({
  type: USERS_FETCHING_ON_SUCCESS,
  payload: { users, totalCount },
});
export const deleteUserFetchingOnProgress = () => ({ type: DELETE_USER_FETCHING_ON_PROGRESS });
export const deleteUserFetchingOnSuccess = (users, totalCount) => ({
  type: DELETE_USER_FETCHING_ON_SUCCESS,
  payload: { users, totalCount },
});

export const getAllUsers = () => dispatch => {
  dispatch(usersFetchingOnProgress());
  getUsers().then(response => {
    if (response.status === 200) {
      dispatch(usersFetchingOnSuccess(response.data.users, response.data.users.length));
    } else {
      dispatch(usersFetchingOnError(response.data.msg));
    }
  });
};

export const deleteUser = (userId, userName) => dispatch => {
  dispatch(deleteUserFetchingOnProgress());
  setTimeout(() => {
    Promise.all([UsersApi.deleteUser(userId), PostsApi.deleteAccount(userName)]).then(
      response =>
        response.every(obj => obj.responseCode === 200) &&
        dispatch(deleteUserFetchingOnSuccess(response[0].users, response[0].totalCount))
    );
  }, 1000);
};

export default usersReducer;
