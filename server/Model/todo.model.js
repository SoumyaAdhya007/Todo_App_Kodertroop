const mongoose = require("mongoose");
// Define the todo schema
const todoSchema = mongoose.Schema({
  title: { type: String, required: true }, // Title of the todo (required field)
  description: { type: String }, // Description of the todo (optional field)
});

// Create the todo model using the schema
const TodoModel = mongoose.model("todo", todoSchema);

// Create the index
TodoModel.collection.createIndex({ title: "text" }, (error) => {
  if (error) {
    console.error("Error creating index:", error);
  } else {
    console.log("Index created successfully");
  }
});

module.exports = { TodoModel };
