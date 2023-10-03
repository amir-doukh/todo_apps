//Le fichier strings.js pour regrouper tous les chaines des caractères
const strings = {
  todoList: {
    title: "Liste de TODO",

    emptyListTodo: "La liste de élements est vide",
  },
  todoDetails: {
    backButon: "Retour à la liste",
    notFoundTodo: "Elément n'existe pas",
  },
  addTodoItem: {
    addButon: "Ajouter élément",
    titleModal: "Ajouter élément TODO",
    subtitle: "Veuillez remplir les champs obligatoires *",
    titleTodo: "Titre *",
    descriptionTodo: "Description ( max 150 caractères)",
    butonValid: "Valider",
    butonCancel: "Annuler",
    msgRequiredElement: {
      requiredTitleItem: "Le titre est obligatoire",
    },
    toast: {
      msgSuccess: "L'élément est crée avec succes ! ",
      msgError: "Problème de création d'élément  ! ",
    },
  },
};
export default strings;
