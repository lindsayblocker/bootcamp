import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'firebase/database'
import { BrowserRouter } from 'react-router-dom';

import { render } from 'react-dom'
import { Provider } from 'react-redux'
import firebase from 'firebase/app'
import 'firebase/auth'
// import 'firebase/firestore' // <- needed if using firestore
// import 'firebase/functions' // <- needed if using httpsCallable
import { createStore, combineReducers, compose } from 'redux'
import {
  ReactReduxFirebaseProvider,
  firebaseReducer
} from 'react-redux-firebase'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHZG40Lb2rQ-VpvNjr582h7s6OU1iJJR4",
  authDomain: "bootcamp-e0872.firebaseapp.com",
  databaseURL: "https://bootcamp-e0872-default-rtdb.firebaseio.com",
  projectId: "bootcamp-e0872",
  storageBucket: "bootcamp-e0872.appspot.com",
  messagingSenderId: "221581384276",
  appId: "1:221581384276:web:5b5c2c9c997bb00b0d6bc1",
  measurementId: "G-MQMLLCY4JT"
};

//import { combineReducers } from 'redux'
//import { firebaseReducer } from 'react-redux-firebase'

/*// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer
})*/

// Initialize Firebase
const app = initializeApp(firebaseConfig);



// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer
  // firestore: firestoreReducer // <- needed if using firestore
})

// Create store with reducers and initial state
const initialState = {}
const store = createStore(rootReducer, initialState)

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users'
  // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
  // enableClaims: true // Get custom claims along with the profile
}


const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch
  // createFirestoreInstance // <- needed if using firestore
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}> 
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
