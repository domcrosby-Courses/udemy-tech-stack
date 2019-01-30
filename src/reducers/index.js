import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';

// Redux combines the reducers together
export default combineReducers({
  libraries: LibraryReducer
});
