//fichier de definition de schema de TodoItem

const { Schema, model } = require("mongoose");
const TodoItemSchema = new Schema({
  title: String,
  description: String,
  isDone: {
    type: Boolean,
    default: false, // initialisatin par default à false
  },
  createdAt: {
    type: Date,
    default: Date.now(), // initialisatin par default à date de creation
  },
});

module.exports = model("Items", TodoItemSchema);
