import './Accueil.scss';
import { useEffect } from 'react';
import * as crudUtilisateurs from '../services/crud-utilisateurs';

export default function Accueil() {
  // Afficher le widget d'authentification
  useEffect(() => crudUtilisateurs.initUI('#fbui'), []);

  return (
    <div className="Accueil">
      <h3 className="logo">Signets <span>(beta)</span></h3>
      <h2 className="amorce">Organisez vos signets Web, <br/>Un jeu d'enfant</h2>
      <div id="fbui"></div>
    </div>
  );
}