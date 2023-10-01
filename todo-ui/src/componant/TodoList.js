//Le fichier TodoListjs pour afficher la liste de TODOs
import React, { memo, useCallback } from "react";
import { Link } from "react-router-dom";
//personal
import "../index.css";
import strings from "../utils/strings.js";
//Memoiristaion de componant
const Todo = memo(function Todo({ todos, setTodos }) {
  //Utilisation de fonction de memoirisation
  const handlchange = useCallback(
    (item, index) => {
      todos.splice(index, 1);
      setTodos((t) => [...t, { ...item, isDone: true }]);
    },
    [todos]
  );
  return (
    <div className="app">
      <h1>{strings.todoList.title}</h1>
      <ul>
        {todos.map((todo, index) => (
          <div
            key={todo.id}
            className="todo"
            style={{ textDecoration: todo.isDone ? "line-through" : "" }}
          >
            <input
              type="checkbox"
              id={todo.is}
              checked={todo.isDone}
              onChange={(e) => handlchange(todo, index)}
            />
            <Link className="textLink" to={`/todos/${todo.id}`}>
              <div className="todoTitleItem">{todo.title}</div>
              <div className="todoDescriptionItem">{todo.description}</div>
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
});
export default Todo;
