import React, { useState, memo } from "react";
import "../index.css";
import Todo from "./Todo";

export default memo(function Todos() {
  const [todos, setTodos] = useState([
    {
      id: 0,
      title: "Bouton ajout",
      description: "Bouton d'ajout un nouveau user",
      isDone: false,
    },
    {
      id: 1,
      title: "Boutton supprission",
      description: "Bouton de supprission d'un  user",
      isDone: false,
    },
    {
      id: 2,
      title: "Boutton modification",
      description: "Bouton de modification un  user",
      isDone: false,
    },
  ]);
  return (
    <div className="todo-list">
      <Todo todos={todos} setTodos={setTodos} />
    </div>
  );
});
