const mongoose = require("mongoose");
const { boolean } = require("zod");

mongoose.connect("mongodb+srv://pradeep20020102:Pr01022002Pr@cluster00.ghjolwt.mongodb.net/todo");

const todoSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  completed:{
    type:Boolean,
  }
});

const todo = mongoose.model('todos',todoSchema);
module.exports = {todo};