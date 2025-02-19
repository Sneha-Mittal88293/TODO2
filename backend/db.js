//mongodb+srv://sneha:4vEx56mTyx9W4Xp5@cluster0.cywi7.mongodb.net/todo2

  const mongoose = require("mongoose");

  mongoose.connect("mongodb://localhost:27017/todo")
  //mongodb+srv://sneha:jaV8paN8LftqeFyt@cluster0.cywi7.mongodb.net/todo
  const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: {
      type: Boolean,
      default: false
    }
  })

  const todo = mongoose.model('todo', todoSchema);
  
  module.exports= {
    todo
  }