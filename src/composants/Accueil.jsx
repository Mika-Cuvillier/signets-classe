import './Accueil.scss';
import firebase from 'firebase/app';
import { instanceFbUI } from '../data/firebase';
import 'firebaseui/dist/firebaseui.css';
import { useEffect } from 'react';

export default function Accueil() {

  useEffect(
    () => instanceFbUI.start('#fbui', {
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID
      ],
      signInFlow: 'popup'
    })
  , []);

  return (
    <div className="Accueil">
      <h3 className="logo">Signets <span>(beta)</span></h3>
      <h2 className="amorce">Organisez vos signets Web, <br/>Un jeu d'enfant</h2>
      <div id="fbui"></div>
    </div>
  );
}