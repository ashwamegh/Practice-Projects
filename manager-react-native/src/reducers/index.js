import { combineReducers } from 'redux';


import AuthReducer from './AuthReducer';

export default combineReducers({
  bananas: () => [],
  auth: AuthReducer,
})