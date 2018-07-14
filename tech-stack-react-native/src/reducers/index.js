// Imports
import { combineReducers } from 'redux';
import LibraryRducer from './LibraryReducer';
import SelectionReducer from './SelectiondReducer';


export default combineReducers({
  libraries: LibraryRducer,
  selectedLibraryId: SelectionReducer,
})
