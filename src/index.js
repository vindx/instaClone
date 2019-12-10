import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import store from './redux/redux-store';
import './index.scss';
import StoreContext from './StoreContext';

const rerenderEntireTree = state => {
  ReactDOM.render(
    <StoreContext.Provider value={store}>
      <App state={state.state} dispatch={store.dispatch.bind(store)} />
    </StoreContext.Provider>,
    document.getElementById('root')
  );
};

rerenderEntireTree(store.getState());
store.subscribe(() => {
  const state = store.getState();
  rerenderEntireTree(state);
});
