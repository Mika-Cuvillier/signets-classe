import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useState } from 'react';

export default function FormDossier({ouvert, setOuvert}) {

  const gererFermer = () => {
    setOuvert(false);
  };

  return (
    <Dialog open={ouvert} onClose={gererFermer} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Ajouter dossier</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="titre"
          label="Titre du dossier"
          type="text"
          fullWidth
        />
        <TextField
          margin="dense"
          id="couverture"
          label="Image de couverture"
          type="url"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={gererFermer} color="primary">
          Annuler
        </Button>
        <Button onClick={gererFermer} color="primary">
          Ajouter
        </Button>
      </DialogActions>
    </Dialog>
  );
}
