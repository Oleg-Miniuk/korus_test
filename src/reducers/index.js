import { combineReducers } from 'redux';
import notes from './notes/notes';
import filter from './filter/filter';

export default combineReducers({
  notes,
  filter
});
