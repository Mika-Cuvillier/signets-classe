import './ListeDossiers.scss';
import Dossier from './Dossier';
import { useEffect, useState } from 'react';
import dbFirestore from '../data/firebase';

export default function ListeDossiers() {
  // État des dossiers de signets
  const [dossiers, setDossiers] = useState([]);

  // Étape C : Exécuter une requête sur la collection 'dossiers-temp' pour lire l'info des dossiers disponibles
  // Comme le code suivant fait appel à une ressource externe, il est ASYNCHRONE
  // donc, il n'y a pas de garantie que le tableau dossiers soit remplit avant l'affichage du composant
  useEffect(
    () => dbFirestore.collection('dossiers-temp').get().then(
            reponse => {
              let dossiersTemp = [];
              reponse.forEach(doc => dossiersTemp.push({id: doc.id, ...doc.data()}));
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