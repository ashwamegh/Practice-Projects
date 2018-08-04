import { EMAIL_CHANGED,PASSWORD_CHANGED, LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS } from './../actions/types';

const INITIAL_STATE = {
  email: '',
  password:'',
  user: null,
  error:''
};

export default (state=INITIAL_STATE, action) => {
  console.table(action);

  switch(action.type){
    case EMAIL_CHANGED:
      return Object.assign({}, state, { email: action.email});
    case PASSWORD_CHANGED:
      return Object.assign({}, state, { password: action.password});
    case LOGIN_USER_SUCCESS:
      return Object.assign({}, state, {user: action.payload});
    case LOGIN_USER_FAILURE:
      return Object.assign({}, state, { error: 'Authentication Failed', password:''});
    default:
      return state;
  }
}