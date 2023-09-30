import React, { useState } from "react";
import "../index.css";
import { Todo } from "./Todo";

export function Todos() {
  const [todos, setTodos] = useState([
    {
      title: "Bouton ajout",
      description: "Bouton d'ajout un nouveau user",
    },
    {
      title: "Boutton supprission",
      description: "Bouton de supprission d'un  user",
    },
    {
      title: "Boutton modification",
      description: "Bouton de modification un  user",
    },
  ]);
  return (
    <div className="todo-list">
      {todos.map((todo, index) => (
        <Todo key={index} index={index} todo={todo} />
      ))}
    </div>
  );
}
