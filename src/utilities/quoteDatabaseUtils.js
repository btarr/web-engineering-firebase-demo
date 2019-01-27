import firebase from 'firebase/app';
import 'firebase/database';

export function fetchQuotes() {
  return firebase.database().ref('quotes/').once('value');
}

export function subscribeToQuotesChanges(callback) {
  return firebase.database().ref('quotes/').on('value', callback);
}

export function createQuote({text, user}) {
  firebase.database().ref('quotes/').push().set({
    text,
    user,
  });
}