// Step-1 : Acquiring Express
const express = require('express');
const port = 8000;

// Step-6: Using the db setup and schema defined before launching the app.
const db = require('./config/mongoose'); //db 
const Todo = require('./models/todo'); //calling the todo schema definition here.

// part of step-1.
const app = express();//Creates an Express application
const path = require('path'); //to get the path dynamically.

//Step-5: After setting the template engine, Set a parser.
app.use(express.urlencoded());
//Including Static files.
app.use(express.static('assets')); //to use css files in our project.


//Step-4 : tell the app to use EJS as view-engine.
app.set('view engine','ejs');
app.set('views','./views');

// Step-3 : Set-up Routes before the server starts to make sure that client is sending the correct URL of the file.
// Place the routes just before listening to the server.
app.use('/',require('./routes'));//by default, picks index.js


//Step-2 : Testing the server, Always place the server at last. Make sure to test it before any development further.
app.listen(port,function(err){
    if(err){
        console.log(`Error :${err} in running the server`);
        return;
    }
    console.log(`Server is up and running on the port: ${port}`);
});
