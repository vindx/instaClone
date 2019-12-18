const AUTH_IS_FETCHING = 'AUTH_IS_FETCHING';
const AUTH_ON_ERROR = 'AUTH_ON_ERROR';
const AUTH_ON_SUCCESS = 'AUTH_ON_SUCCESS';

const initialState = {
  isFetching: false,
  error: null,
  data: {
    id: null,
    email: null,
    userName: null,
    fullName: null,
    profilePhoto: null,
    password: null,
    removeRequest: null,
    posts: null,
  },
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
      };
    default:
      return state;
  }
};

export const authIsFetching = () => ({ type: AUTH_IS_FETCHING });
export const authOnError = error => ({ type: AUTH_ON_ERROR, payload: error });
export const authOnSuccess = userData => ({ type: AUTH_ON_SUCCESS, payload: userData });
export default authReducer;
