import { EMAIL_CHANGED } from './../actions/types';

export default (state={ email: ''}, action) => {
  switch(action.type){
    case EMAIL_CHANGED:
      return Object.assign({}, state, { email: action.email});
    default:
      return state;
  }
}