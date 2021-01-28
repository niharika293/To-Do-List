// Setting up mongo DB using Mongoose.
// Step-1: require mongoose library.
const mongoose = require('mongoose');
// Step-2 : Connect with DB. 
mongoose.connect('mongodb://localhost/todo_list_db',{ useUnifiedTopology: true });
const db = mongoose.connection; // step-3: to check the connection.
// Step-4 : Handling errors
db.on('error',console.error.bind(console,'Error connecting to db!'));
// Step-5 : Server up and running
db.once('open',function(){
    console.log('Successfully connected to DB!!');
});