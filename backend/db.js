//mongodb+srv://sneha:4vEx56mTyx9W4Xp5@cluster0.cywi7.mongodb.net/todo2

  const mongoose = require("mongoose");

  mongoose.connect("mongodb+srv://sneha:4vEx56mTyx9W4Xp5@cluster0.cywi7.mongodb.net/todo2")
  const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
  })

  const todo = mongoose.model('todos', todoSchema);
  
  module.exports= {
    todo
  }