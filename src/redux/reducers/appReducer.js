import { authMe } from './authReducer';

const INITIALIZE_ON_SUCCESS = 'INITIALIZE_ON_SUCCESS';

const initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZE_ON_SUCCESS:
      return { ...state, initialized: true };
    default:
      return state;
  }
};

export const initializeOnSuccess = () => ({ type: INITIALIZE_ON_SUCCESS });

export const initialize = () => async dispatch => {
  await dispatch(authMe());
  dispatch(initializeOnSuccess());
};

export default appReducer;
