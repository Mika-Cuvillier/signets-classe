import './Appli.scss';
import Entete from './Entete';
import Accueil from './Accueil';
import ListeDossiers from './ListeDossiers';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { useState, useEffect } from 'react';
import firebase from 'firebase/app'; 
import { instanceFirestore, instanceFirebaseAuth } from '../services/firebase-initialisation';
import { collUtil } from '../services/config';

export default function Appli() {
  const [utilisateur, setUtilisateur] = useState(null);

  useEffect(
    () => {
      instanceFirebaseAuth.onAuthStateChanged(
        util => {
          // Changer l'état de la variable 'utilisateur'
          setUtilisateur(util);
          // Si l'utilisteur vient de se loguer, créer son profil dans Firestore
          // si c'est un nouvel utilisateur (ou rien faire s'il existe déjà)
          if(util !== null) {
            instanceFirestore.collection(collUtil).doc(util.uid).set(
              {nom: util.displayName, courriel: util.email},
              {merge: true}
            );
          }
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
              <ListeDossiers utilisateur={utilisateur} />
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