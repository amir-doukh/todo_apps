import React, { useState } from "react";
import "./styles/index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//personal
import TodoList from "./componant/TodoList";
import TodoDetails from "./componant/TodoDetails";
function App() {
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
