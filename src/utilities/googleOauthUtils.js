import firebase from 'firebase/app';
import 'firebase/auth';

export function signInWithPopup(provider) {
  return firebase.auth().signInWithPopup(provider).then(function (result) {
    return result.user;
  });
}

export function signOut(provider) {
  return firebase.auth().signOut().then(function () {
    // Sign-out successful.
  });
}

export function getCurrentUser() {
  return firebase.auth().currentUser;
}