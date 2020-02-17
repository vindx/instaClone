import { handleActions } from 'redux-actions';
import {
  tagsFindingToggle,
  tagsFindingOnSuccess,
  tagsFindingOnError,
  deleteExistedTags,
  selectTag,
  removeSelectedTag,
  deleteSelectedTags,
  showButton,
  createTagAC,
} from '../actions/tagsAction';

const defaultState = {
  isFetching: false,
  error: null,
  existedTags: [],
  selectedTags: [],
  showButton: false,
};

const tagsReducer = handleActions(
  {
    [tagsFindingToggle]: (state, action) => ({
      ...state,
      isFetching: action.payload,
    }),
    [tagsFindingOnSuccess]: (state, action) => ({
      ...state,
      isFetching: false,
      error: null,
      existedTags: action.payload,
    }),
    [tagsFindingOnError]: (state, action) => ({
      ...state,
      isFetching: false,
      error: action.payload,
    }),
    [deleteExistedTags]: state => ({
      ...state,
      existedTags: [],
    }),
    [selectTag]: (state, action) => ({
      ...state,
      selectedTags: state.selectedTags.find(tag => tag._id === action.payload._id)
        ? [...state.selectedTags]
        : [...state.selectedTags, action.payload],
    }),
    [removeSelectedTag]: (state, action) => ({
      ...state,
      selectedTags: state.selectedTags.filter(tag => tag._id !== action.payload._id),
    }),
    [deleteSelectedTags]: state => ({
      ...state,
      selectedTags: [],
    }),
    [showButton]: (state, action) => ({
      ...state,
      showButton: action.payload,
    }),
    [createTagAC]: (state, action) => ({
      ...state,
      selectedTags: [...state.selectedTags, action.payload],
    }),
  },
  defaultState
);

export default tagsReducer;
