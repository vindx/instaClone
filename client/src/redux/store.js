import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import * as reducers from './reducers';

const combinedReducers = combineReducers({
  profile: reducers.profileReducer,
  creatingPost: reducers.createPostReducer,
  app: reducers.appReducer,
  users: reducers.usersReducer,
  posts: reducers.postsReducer,
  auth: reducers.authReducer,
  tags: reducers.tagsReducer,
  profilePhotoOptions: reducers.profilePhotoReducer,
  form: formReducer,
});

// const devTools = window.__REDUX_DEVTOOLS_EXTENSION__();
const composeEnhancers = compose(applyMiddleware(thunk));

const store = createStore(combinedReducers, composeEnhancers);

export default store;
