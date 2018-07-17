import { EMAIL_CHANGED,PASSWORD_CHANGED } from './../actions/types';

export default (state={ email: ''}, action) => {
  console.table(action);

  switch(action.type){
    case EMAIL_CHANGED:
      return Object.assign({}, state, { email: action.email});
    case PASSWORD_CHANGED:
      return Object.assign({}, state, { password: action.password})
    default:
      return state;
  }
}