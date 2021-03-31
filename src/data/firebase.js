import firebase from 'firebase/app';
import firestore from 'firebase/firestore';
import * as firebaseui from 'firebaseui';

// Votre propre objet de configuration ici ;-)
const firebaseConfig = {
 
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