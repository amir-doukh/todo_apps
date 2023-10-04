import React, { useState, useEffect } from "react";
import "./styles/Index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import config from "./config.js";

//personal
import TodoList from "./componant/TodoList";
import TodoDetails from "./componant/TodoDetails";
function App() {
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
