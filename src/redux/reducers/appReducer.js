import { authMe } from './authReducer';
import { INITIALIZE_ON_SUCCESS } from '../../shares/constants/constants';
import { initializeOnSuccess } from '../actions/appActions';

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

export const initialize = () => async dispatch => {
  await dispatch(authMe());
  dispatch(initializeOnSuccess());
};

export default appReducer;
