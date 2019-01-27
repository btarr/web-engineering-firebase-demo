import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from 'firebase/app';
import 'firebase/auth';
import { firebaseConfig } from './config';
import 'semantic-ui-css/semantic.min.css'

var config = firebaseConfig;
firebase.initializeApp(config);

const provider = new firebase.auth.GoogleAuthProvider();

ReactDOM.render(
  <App oauthProvider={provider} />,
  document.getElementById('app')
);