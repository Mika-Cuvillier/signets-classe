import firebase from 'firebase/app';
import firestore from 'firebase/firestore';
import * as firebaseui from 'firebaseui';
import firebaseConfig from './config';

// Initialiser Firebase
if(firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

// Initialiser Firebase Auth
export const instanceFirebaseAuth = firebase.auth();

// Initialiser Firestore
export const instanceFirestore = firebase.firestore();

// Initialiser FirebaseUI
export const instanceFirebaseUI = new firebaseui.auth.AuthUI(instanceFirebaseAuth);