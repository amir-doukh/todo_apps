//Le fichier AddTodoItemModaljs pour gerér l'ajout d'un nouveau élement
//modules
import React, { useState, memo } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Toast from "../toast/toast";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
//local files
import strings from "../../utils/strings.js";
import "../../styles/addModal.css";
import config from "../../config.js";
const AddTodoItem = memo(({ openModal, setOpenModal }) => {
  //hooks
  const [openToast, setOpenToast] = useState({});
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const initialValues = {
    title: "",
    description: "",
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Le titre est obligatoire"),
    description: Yup.string(),
  });

  const onSubmit = (values, { resetForm }) => {
    console.log("Form data submitted:", values);
    resetForm();
  };
  const handleSubmit = async (values, { resetForm }) => {
    console.log(values);
    try {
      const response = await fetch(config.apiUrl + "/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        // ajout item avec succes

        setOpenToast({
          open: true,
          severity: "success",
          message: strings.addTodoItem.toast.msgSuccess,
        });
        setTimeout(() => {
          resetForm();
          setOpenModal(false);
          window.location.reload();
        }, 2600);
      } else {
        setOpenToast({
          open: true,
          severity: "error",
          message: strings.addTodoItem.toast.msgError,
        });
      }
    } catch (error) {
      setOpenToast({
        open: true,
        severity: "error",
        message: strings.addTodoItem.toast.msgError,
      });
    }
  };

  const handleClickOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };
  const handleCloseToast = (event, reason) => {
    setOpenToast({});
  };
  return (
    <div>
      <Dialog open={openModal} onClose={handleClose}>
        <DialogTitle>{strings.addTodoItem.titleModal}</DialogTitle>
        <DialogContent>
          <DialogContentText>{strings.addTodoItem.subtitle}</DialogContentText>

          <div className="form-container">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form className="my-form">
                <div className="form-group">
                  <label htmlFor="title">{strings.addTodoItem.titleTodo}</label>
                  <Field type="text" id="title" name="title" />
                  <ErrorMessage
                    name="title"
                    component="div"
                    className="error-message"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="description">
                    {strings.addTodoItem.descriptionTodo}
                  </label>
                  <Field
                    maxLength={150}
                    as="textarea"
                    id="description"
                    name="description"
                  />
                </div>
                <div className="form-group">
                  <button type="submit" className="submit-button">
                    {strings.addTodoItem.butonValid}
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </DialogContent>
      </Dialog>
      <Toast
        open={openToast.open}
        message={openToast.message}
        severity={openToast.severity}
        onClose={openToast.handleCloseToast}
      />
    </div>
  );
});

export default AddTodoItem;
