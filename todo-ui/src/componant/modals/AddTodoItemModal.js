//Le fichier AddTodoItemModaljs pour gerér l'ajout d'un nouveau élement
//modules
import React, { useState, memo } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
//local files
import strings from "../../utils/strings.js";
import "../../styles/addModal.css";

const AddTodoItem = memo(({ openModal, setOpenModal }) => {
  //hooks
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const initialValues = {
    title: "",
    description: "",
  };

  const validationSchema = Yup.object({
    title: Yup.string().required(
      strings.addTodoItem.msgRequiredElement.requiredTitleItem
    ),
    description: Yup.string(),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    console.log("formData:", formData);
    resetForm();
  };

  const handleClickOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
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
                    name="name"
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
    </div>
  );
});

export default AddTodoItem;
