const { TodoModel } = require("../Model/todo.model");
const getTodo = async (req, res) => {
  try {
    const todos = await TodoModel.find({});
    res.status(200).send(todos);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
const searchTodo = async (req, res) => {
  const query = req.query.q;
  try {
    const result = await TodoModel.find({
      $text: { $search: query, $caseSensitive: false },
    });
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const createTodo = async (req, res) => {
  const payload = req.body;
  try {
    if (!payload.title) {
      res.status(400).send({
        message: "Please provide the title of the todo",
      });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const updateTodo = async (req, res) => {
  const id = req.params.id;
  const payload = req.body;
  try {
    if (!id) {
      res.status(400).send({ message: "Please provied id" });
    }
    await TodoModel.findByIdAndUpdate({ _id: id }, payload);
    res.status(200).send({ message: "Todo updated successfully" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
const deleteTodo = async (req, res) => {
  const id = req.params.id;
  try {
    if (!id) {
      res.status(400).send({ message: "Please provied id" });
    }
    await TodoModel.findByIdAndDelete({ _id: id });
    res.status(204).send({ message: "Todo updated successfully" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = { getTodo, searchTodo, createTodo, updateTodo, deleteTodo };
