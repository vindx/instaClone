import { handleActions } from 'redux-actions';
import {
  photoOptionFetchingToggle,
  uploadProfilePhotoOnSuccess,
  uploadProfilePhotoOnError,
  profilePhotoOptionsMenuIsOpen,
} from '../actions/profilePhotoActions';

const defaultState = {
  isFetching: false,
  error: null,
  success: false,
};

const profilePhotoReducer = handleActions(
  {
    [photoOptionFetchingToggle]: (state, action) => ({
      ...state,
      isFetching: action.payload,
      error: null,
      success: false,
    }),
    [uploadProfilePhotoOnSuccess]: state => ({
      ...state,
      isFetching: false,
      success: true,
    }),
    [uploadProfilePhotoOnError]: (state, action) => ({
      ...state,
      isFetching: false,
      success: false,
      error: action.payload,
    }),
    [profilePhotoOptionsMenuIsOpen]: state => ({ ...state, success: false }),
  },
  defaultState
);

export default profilePhotoReducer;
