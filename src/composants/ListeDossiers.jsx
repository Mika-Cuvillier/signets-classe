import './ListeDossiers.scss';
import Dossier from './Dossier';
import { useEffect, useState } from 'react';
import { instanceFirestore } from '../services/firebase-initialisation';

export default function ListeDossiers() {
  // État des dossiers de signets
  const [dossiers, setDossiers] = useState([]);

  // Étape C : Exécuter une requête sur la collection 'dossiers-temp' pour lire l'info des dossiers disponibles
  // Comme le code suivant fait appel à une ressource externe, il est ASYNCHRONE
  // donc, il n'y a pas de garantie que le tableau dossiers soit remplit avant l'affichage du composant
  useEffect(
    () => instanceFirestore.collection('dossiers-temp').get().then(
            reponse => {
              let dossiersTemp = [];
              //console.log('Reponse de Firestore : ', reponse);
              reponse.forEach(
                doc => {
                          //console.log('Document Firestore : ', doc);
                          //console.log('Données associées au document : ', doc.data());
                          //console.log('ID du document', doc.id);
                          dossiersTemp.push({...doc.data(), id: doc.id});
                      });
              console.log('Le tableau dossiersTemp : ', dossiersTemp);
              setDossiers(dossiersTemp);
            }
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