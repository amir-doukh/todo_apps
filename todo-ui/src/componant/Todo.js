import React from "react";
import "../index.css";

export function Todo({ todo }) {
  return (
    <>
      <div className="todo">
        <div className="todoTitle">{todo.title}</div>
        <div className="todoDescription"> {todo.description}</div>
      </div>
    </>
  );
}
