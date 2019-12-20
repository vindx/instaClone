import { combineReducers, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { commonReducer, authReducer, usersReducer, postsReducer } from './reducers';

const reducers = combineReducers({
  //autorized user on action.payload
  // state: commonReducer,
  // posts: postsReducer,
  users: usersReducer,
  auth: authReducer,
  form: formReducer,
});

const enhancer = () => window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(reducers, enhancer());

export default store;
