import { combineReducers } from 'redux';
import SearchResultsReducer from './reducer_search';

const rootReducer = combineReducers({
  searchResults: SearchResultsReducer
});

export default rootReducer;
