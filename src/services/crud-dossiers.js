import {instanceFirestore} from './firebase-initialisation';
import {collUtil, collDossiers} from './config';
import firebase from 'firebase/app';

export const test = 'Un test';


export async function lireTout(uid) {
  let dossiers = [];
  return instanceFirestore.collection(collUtil).doc(uid).collection(collDossiers).get().then(
                              reponse => {
                                reponse.forEach(doc => dossiers.push({...doc.data(), id: doc.id}));
                              }
                            ).then(
                              () => dossiers
                            );
}

export async function supprimer() {

}

export async function modifier() {

}

export async function creer(uid, dossier) {
  dossier.modification = firebase.firestore.FieldValue.serverTimestamp();
  return instanceFirestore.collection(collUtil).doc(uid).collection(collDossiers).add(dossier);
}