import { instanceFirebaseUI, instanceFirestore, instanceFirebaseAuth } from './firebase-initialisation';
import firebase from 'firebase/app';
import 'firebaseui/dist/firebaseui.css';

import {collUtil, collDossiers} from './config';

/**
 * Initialise le widget d'authentification FirebaseUI
 * @param {string} refEltAncrage sélecteur de l'élément qui recevra le widget
 */
export function initUI(refEltAncrage) {
  instanceFirebaseUI.start(refEltAncrage, {
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    signInFlow: 'popup'
  });
}


export function deconnexion() {
  instanceFirebaseAuth.signOut();
}
