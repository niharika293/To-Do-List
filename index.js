// Step-1 : Acquiring Express
const express = require('express');
const app = express();//Creates an Express application
const port = 8000;
//Step-2 : Testing the server
app.listen(port,function(err){
    if(err){
        console.log(`Error :${err} in running the server`);
        return;
    }
    console.log(`Server is up and running on the port: ${port}`);
});
// //Getting response from server
// app.get('/',function(req,res){
//     //return res.render('home');
//     return res.end('<h1>Welcome to my to-do app </h1>');
// });
// Step-3 : Set-up Routes 

