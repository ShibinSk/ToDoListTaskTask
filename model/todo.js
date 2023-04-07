const { mongoose } = require("mongoose");

const todoSchema = new mongoose.Schema({
  task: {
    type: String,
    require: true,
  },
  priority: {
    type: Number,
    require: true,
  },
  status: {
    type: String,
    require: true,
  },
});

const todo = mongoose.model("todoList", todoSchema);

module.exports = { todo };
