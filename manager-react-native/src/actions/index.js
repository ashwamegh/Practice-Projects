import * as firebase from 'firebase';
import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE } from "./types";

export const emailChanged = email => {
  return {
    type: EMAIL_CHANGED,
    email
  };
};

export const passwordChanged = password => {
  return {
    type: PASSWORD_CHANGED,
    password
  };
};

export const loginUser = ({ email, password}) => (dispatch) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(user => loginUserSuccess(dispatch, user))
  .catch(() => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(user => loginUser(dispatch, user))
    .catch(() => loginUserFailure(dispatch))
  });
}

const loginUserFailure = (dispatch) => {
  return dispatch({
    type: LOGIN_USER_FAILURE
  })
}

const loginUserSuccess = (dispatch, user) => {
  return dispatch({
    type: LOGIN_USER_SUCCESS,
    user
  });
}
