//Le fichier TodoListjs pour afficher la liste de TODOs
import React, { memo, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
//personal
import "../styles/index.css";
import strings from "../utils/strings.js";
import AddTodoItemModal from "./modals/AddTodoItemModal";
//Memoiristaion de componant
const TodoList = memo(function Todo({ todos, setTodos }) {
  const [openModal, setOpenModal] = useState(false);
  //Utilisation de fonction de memoirisation
  const handlchange = useCallback(
    (item, index) => {
      todos.splice(index, 1);
      setTodos((t) => [...t, { ...item, isDone: true }]);
    },
    [todos]
  );
  // fonction utiliser pour gérer l'overture et fermeture de Modal d'ajout element
  const handleClickOpen = () => {
    setOpenModal(!openModal);
  };
  return (
    <>
      <div className="app">
        <div className="gridTitleTodoList">
          <div>
            <Button
              class="backButton"
              variant="outlined"
              onClick={handleClickOpen}
            >
              <div className="backButton">{strings.addTodoItem.addButon}</div>
            </Button>
          </div>
          <h1 className="gridItemTodoList">{strings.todoList.title}</h1>
        </div>
        <ul>
          {todos.map((todo, index) => (
            <div
              key={todo.id}
              className="todo"
              style={{ textDecoration: todo.isDone ? "line-through" : "" }}
            >
              <input
                type="checkbox"
                id={todo.id}
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
      <AddTodoItemModal openModal={openModal} setOpenModal={setOpenModal} />
    </>
  );
});
export default TodoList;
