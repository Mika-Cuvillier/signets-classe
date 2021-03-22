import './ListeDossiers.scss';
import Dossier from './Dossier';
import firebase from 'firebase/app';
import firestore from 'firebase/firestore';
import { useState, useEffect } from 'react';

const firebaseConfig = {
  apiKey: "AIzaSyCoWgkBcWdz_M9GjEr5TE-b7tJfejQy1JI",
  authDomain: "react-iwra.firebaseapp.com",
  projectId: "react-iwra",
  storageBucket: "react-iwra.appspot.com",
  messagingSenderId: "422100533764",
  appId: "1:422100533764:web:5cb055c9062799e8812b51"
};

// Étape A : Initialiser Firebase
if(firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

// Étape B : Initialiser Firestore
const dbFirestore = firebase.firestore();



export default function ListeDossiers() {
  const [dossiers, setDossiers] = useState([]);

  // Étape C : Exécuter une requête sur la collection 'dossiers-temp' pour lire l'info des dossiers disponibles
  // Comme le code suivant fait appel à une ressource externe, il est ASYNCHRONE
  // donc, il n'y a pas de garantie que le tableau dossiers soit remplit avant l'affichage du composant
  useEffect(
    () => dbFirestore.collection('dossiers-temp').get().then(
            reponse => reponse.forEach(
              doc => dossiers.push(doc.data())
            )
          )
    , []
  );

  return (
    <ul className="ListeDossiers">
      {
        dossiers.map( 
          dossier =>  <li key={dossier.id}><Dossier {...dossier} /></li>
        )
      }
    </ul>
  );
}