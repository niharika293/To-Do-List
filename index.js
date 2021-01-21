// Acquiring Express
const express = require('express');
const app = express();//Creates an Express application
const port = 8000;
//Testing the server
app.listen(port,function(err){
    if(err){
        console.log(`Error :${err} in running the server`);
        return;
    }
    console.log(`Server is up and running on the port: ${port}`);
});