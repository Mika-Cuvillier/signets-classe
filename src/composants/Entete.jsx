import './Entete.scss';
import { Avatar } from '@material-ui/core'; 
import Button from '@material-ui/core/Button';
import { instanceFirebaseAuth } from '../services/firebase-initialisation';

export default function Entete(props) {
  const utilisateur = props.utilisateur;
  console.log("L'utilisateur Firebase Auth connecté : ", utilisateur);
  return (
    <header className="Entete">
      <div className="logo">
        Signets
        <Button
          variant="outlined"
          size="small"
          className="btnDeconnexion"
          onClick={() => instanceFirebaseAuth.signOut()}
        >Déconnexion</Button>
      </div>
      <div className="utilisateur">{utilisateur.displayName} <Avatar className="avatar" alt={utilisateur.displayName} src={utilisateur.photoURL} /></div>
    </header>
  );
}