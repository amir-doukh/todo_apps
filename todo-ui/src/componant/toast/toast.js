//un composant d'affichage de toast
import React from "react";
import { Snackbar, Alert } from "@mui/material";
/**
 * message d'information sur l'etat d'action
 */
const Toast = ({ open, message, severity, onClose }) => {
  return (
    <Snackbar open={open} autoHideDuration={2500} onClose={onClose}>
      <Alert severity={severity} onClose={onClose}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
