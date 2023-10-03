/**
 * definition des routes
 */
//modules
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
//local
const Todo = require("../models/todo");

//api principale
router.get("/", function (req, res, next) {
  res.render("index", { title: "Api back TODO" });
});
//definition de route  retourner tous  items order by createdAt
router.get("/allItems", async (req, res) => {
  try {
    // query 1 : recherche les elements qui sont coches
    const queryIsDone = Todo.find({ isDone: true })
      .sort({ createdAt: -1 })
      .lean();
    // query 1 : recherche les elements qui ne sont pas coches
    const queryNotDone = Todo.find({ isDone: false })
      .sort({ createdAt: 1 })
      .lean();
    Promise.all([queryNotDone, queryIsDone]).then((results) => {
      // Concatenate the results
      const concatenatedResults = results[0].concat(results[1]);
      res.json(concatenatedResults);
    });
  } catch (error) {
    console.error("Error retrieving items:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
//ajouter un todoItem
router.post("/add", async (req, res) => {
  const { description, title } = req.body || {};
  try {
    const newTodoItem = new Todo({
      description: description,
      title: title,
    });
    await newTodoItem.save();
    res.json(newTodoItem);
  } catch (error) {
    console.error(error);
    res.status(500).json("[Ajout] Problème d'ajout un element TODO");
  }
});
//modifier un todoItem by id
router.post("/update", async (req, res) => {
  const { _id, newItem } = req.body || {};
  const idObject = new mongoose.Types.ObjectId(_id);
  try {
    const findItem = await Todo.findOne({ _id: idObject }).lean();
    if (!findItem)
      return res.status(404).json("[modification] l'élement n'existe pas");
    const updatedItem = await Todo.findOneAndUpdate(
      { _id },
      { ...newItem },
      { new: true }
    );
    res.json(updatedItem);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json("[modification] Problème de modification un element TODO");
  }
});

module.exports = router;
