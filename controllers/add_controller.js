// Connect with mongo DB and Schema.
const db = require('../config/mongoose');
const Todo = require('../models/todo');

module.exports.add = function(req,res){
    console.log("Printing request ",req.body.description);
    Todo.create({
        description: req.body.description,
        category: req.body.category,
        due_date : req.body.due_date
    },function(err,newTodo){
        if(err){
            console.log("Error in adding a new contact!",err);
            return;
        }
        console.log(`********** ${newTodo}`);
        res.redirect('back');
    })
}