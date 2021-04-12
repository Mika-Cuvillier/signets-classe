import './Appli.scss';
import Entete from './Entete';
import Accueil from './Accueil';
import ListeDossiers from './ListeDossiers';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { useState, useEffect } from 'react';
import firebase from 'firebase/app'; 
import dbFirestore from '../data/firebase';

export default function Appli() {
  const [utilisateur, setUtilisateur] = useState(null);

  useEffect(
    () => {
      firebase.auth().onAuthStateChanged(
        util => {
          // Changer l'état de la variable 'utilisateur'
          setUtilisateur(util);
          console.log('Voici l\'objet utilisateur de Firebase Auth : ', util.uid);
          // Si l'utilisteur vient de se loguer, créer son profil dans Firestore
          // si c'est un nouvel utilisateur (ou rien faire s'il existe déjà)
          dbFirestore.collection('utilisateurs-signets').doc(util.id).set(
            {nom: util.displayName, courriel: util.email},
            {merge: true}
          );
        }
      )
    }
  , []);

  return (
    <div className="Appli">
      {
        utilisateur ?
          <>
            <Entete utilisateur={utilisateur} />
            <section className="contenu-principal">
              <ListeDossiers />
              <Fab className="ajoutRessource" color="primary" aria-label="Ajouter dossier">
                <AddIcon />
              </Fab>
            </section>
          </>
        :
          <Accueil />
      }
    </div>
  );
}