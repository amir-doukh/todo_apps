// fichier TodoDetails.js pour afficher les details de Todo
//modules
import React from "react";
import { useParams, Link } from "react-router-dom";
//locales
import strings from "../utils/strings.js";
/**
 * afficher les details de item
 */
const TodoDetails = ({ todos }) => {
  const { id } = useParams();
  const todo = todos.find((todo) => todo._id === id);

  if (!todo) {
    return <div>{strings.todoDetails.notFoundTodo}</div>;
  }
  return (
    <div className="todoDetailsContainer">
      <h1 className="todoTitleDetails">{todo.title}</h1>
      <p className="todoDescriptionDetails">{todo.description}</p>
      <Link to="/" className="backButton">
        {strings.todoDetails.backButon}
      </Link>
    </div>
  );
};

export default TodoDetails;
