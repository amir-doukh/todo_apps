//un composant d'affichage de toast
import React from "react";
import { Snackbar, Alert } from "@mui/material";

function Toast({ open, message, severity, onClose }) {
  return (
    <Snackbar open={open} autoHideDuration={2500} onClose={onClose}>
      <Alert severity={severity} onClose={onClose}>
        {message}
      </Alert>
    </Snackbar>
  );
}

export default Toast;
