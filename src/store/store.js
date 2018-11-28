import { createStore, compose } from 'redux';
import rootReducer from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  filter: '',
  notes: [
    {
      id: 1,
      title: 'title 1',
      description: 'note description 1'
    },
    {
      id: 2,
      title: 'title 2',
      description: 'note description 2'
    }
  ]
};

const store = createStore(rootReducer, initialState, composeEnhancers());
const { dispatch, getState } = store;

export { store, dispatch, getState };
