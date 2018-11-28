import { createStore, compose } from 'redux';
import rootReducer from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  filter: ''
};

const store = createStore(rootReducer, initialState, composeEnhancers());
const { dispatch, getState } = store;

export { store, dispatch, getState };
