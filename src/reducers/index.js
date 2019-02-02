import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

// Redux combines the reducers together
export default combineReducers({
  libraries: LibraryReducer,
  selectedLibraryId: SelectionReducer
});
