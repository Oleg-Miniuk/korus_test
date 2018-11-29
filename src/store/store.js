import { createStore, compose } from 'redux';
import rootReducer from '../reducers';
import localStorageUtils from '../utils/locaStorage';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = localStorageUtils.loadState();

const store = createStore(rootReducer, initialState, composeEnhancers());

const { dispatch, getState } = store;

store.subscribe(() => {
  localStorageUtils.saveState(getState());
});

export { store, dispatch, getState };
