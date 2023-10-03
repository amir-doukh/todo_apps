import React, { useState, useEffect } from "react";
import "./styles/index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import config from "./config.js";

//personal
import TodoList from "./componant/TodoList";
import TodoDetails from "./componant/TodoDetails";
function App() {
  // const [todos, setTodos] = useState([
  //   {
  //     id: 0,
  //     title: "Bouton ajout",
  //     description: "Bouton d'ajout un nouveau user",
  //     isDone: false,
  //   },
  //   {
  //     id: 1,
  //     title: "Boutton supprission",
  //     description: "Bouton de supprission d'un  user",
  //     isDone: false,
  //   },
  //   {
  //     id: 2,
  //     title: "Boutton modification",
  //     description: "Bouton de modification un  user",
  //     isDone: false,
  //   },
  // ]);
  //hooks
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch(config.apiUrl + "/allItems")
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<TodoList todos={todos} setTodos={setTodos} />}
        />
        <Route path="/todos/:id" element={<TodoDetails todos={todos} />} />
      </Routes>
    </Router>
  );
}

export default App;
