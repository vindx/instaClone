import { handleAction } from 'redux-actions';

const appReducer = handleAction(
  'APP/INITIALIZE_ON_SUCCESS',
  () => ({
    initialized: true,
  }),
  {
    initialized: false,
  }
);

export default appReducer;
