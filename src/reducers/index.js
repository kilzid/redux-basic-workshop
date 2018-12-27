import { combineReducers } from 'redux';
import shows from './shows';
import search from './search';
export default combineReducers({
  shows,
  search,
});
