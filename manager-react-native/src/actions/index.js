import * as firebase from 'firebase';
import { EMAIL_CHANGED, PASSWORD_CHANGED } from "./types";

export const emailChanged = email => {
  return {
    type: EMAIL_CHANGED,
    payload: email
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
  .then(user => console.log(user));
}
