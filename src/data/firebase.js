import firebase from 'firebase/app';
import firestore from 'firebase/firestore';
import * as firebaseui from 'firebaseui';

// Votre propre objet de configuration ici ;-)
const firebaseConfig = {
  apiKey: "AIzaSyCoWgkBcWdz_M9GjEr5TE-b7tJfejQy1JI",
  authDomain: "react-iwra.firebaseapp.com",
  projectId: "react-iwra",
  storageBucket: "react-iwra.appspot.com",
  messagingSenderId: "422100533764",
  appId: "1:422100533764:web:5cb055c9062799e8812b51"
};

// Initialiser Firebase
if(firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

// Initialiser Firestore
const dbFirestore = firebase.firestore();

// Exporter par défaut la référence à Firestore
export default dbFirestore;

// Initialiser FirebaseUI
export const instanceFbUI = new firebaseui.auth.AuthUI(firebase.auth());