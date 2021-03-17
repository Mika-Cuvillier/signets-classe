import './ListeDossiers.scss';
import dossTab from '../data/liste-dossiers.json';
import Dossier from './Dossier';
import firebase from 'firebase/app';
import firestore from 'firebase/firestore';

const firebaseConfig = {
  
};

export default function ListeDossiers() {
  return (
    <ul className="ListeDossiers">
      {
        dossTab.map( 
          dossier =>  <li key={dossier.id}><Dossier {...dossier} /></li>
        )
      }
    </ul>
  );
}