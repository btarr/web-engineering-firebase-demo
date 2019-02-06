import firebase from 'firebase/app';
import 'firebase/auth';

export function signInWithPopup(provider) {
  return firebase.auth().signInWithPopup(provider).then(function (result) {
    return result.user;
  });
}

export function signOut(provider) {
  return firebase.auth().signOut();
}

export function addLoginListener(callback) {
  firebase.auth().onAuthStateChanged(function (user) {
    callback(user || null)
  });
}

export function getCurrentUser() {
  return firebase.auth().currentUser;
}