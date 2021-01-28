// To connect with mongoose db and schema.
const db = require('../config/mongoose');
const Todo = require('../models/todo');

//Defining global array of objects for To-Do List data.
var todoList = [
    {
        description : "Buy Groceries",
        category : "Personal",
        due_date : "09/01/2021",
    },
    {
        description : "Buy Pajamas!!",
        category : "Personal",
        due_date : "19/01/2021",
    }
];
console.log(todoList);
// module.exports.home = function(req,res){
//     return res.render('home',{
//         todo_list : todoList
//     });
// } 
// (Use when no db is connected and values are static).

// using mongodb to fetch values from the db.
module.exports.home = function(req,res){
    Todo.find({},function(err,todo){
        if(err){
            console.log("Error in fetching tasks from To-do");
        }
        return res.render('home',{
            todo_list : todo
        });
    });   
}