import firebase from 'firebase/app';
import 'firebase/database';
import moment from 'moment';

export const DATE_FORMAT = 'MMMM Do YYYY';

export function fetchQuotes() {
  return firebase.database().ref('quotes/').once('value');
}

export function subscribeToQuotesChanges(callback) {
  return firebase.database().ref('quotes/').on('value', callback);
}

export function unsubscribeFromQuotesChanges(listener) {
  return firebase.database().ref('quotes/').off('value', listener);
}

export function createQuote({text, user}) {
  firebase.database().ref('quotes/').push().set({
    text,
    user,
    date: moment().format(DATE_FORMAT),
  });
}