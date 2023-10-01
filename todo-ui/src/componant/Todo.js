import React, { memo, useCallback } from "react";
import "../index.css";

const Todo = memo(function Todo({ todos, setTodos }) {
  const handlchange = useCallback(
    (item, index) => {
      todos.splice(index, 1);
      setTodos((t) => [...t, { ...item, isDone: true }]);
    },
    [todos]
  );
  return (
    <>
      {todos.map((todo, index) => (
        <div
          key={todo.key}
          className="todo"
          style={{ textDecoration: todo.isDone ? "line-through" : "" }}
        >
          <input
            type="checkbox"
            id={todo.key}
            checked={todo.isDone}
            onChange={(e) => handlchange(todo, index)}
          />
          <div className="todoTitle">{todo.title}</div>
          <div className="todoDescription">{todo.description}</div>
        </div>
      ))}
    </>
  );
});
export default Todo;
