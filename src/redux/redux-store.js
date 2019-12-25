import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import { createPostReducer, authReducer, usersReducer, postsReducer, appReducer } from './reducers';

const reducers = combineReducers({
  //autorized user on action.payload
  // state: commonReducer,
  creatingPost: createPostReducer,
  app: appReducer,
  users: usersReducer,
  posts: postsReducer,
  auth: authReducer,
  form: formReducer,
});

const composeEnhancers = compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__());

const store = createStore(reducers, composeEnhancers);

export default store;
