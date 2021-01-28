const mongoose = require('mongoose'); //requiring mongoose library.
// defining schema for todo related details.
const todoSchema = new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    due_date:{
        type:Date,
        required:true
    }
});
// Name of the Collection definition to be called.
const Todo = mongoose.model('Todo',todoSchema);
module.exports = Todo;