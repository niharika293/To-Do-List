// Connect with Mongo DB And schema.
const db = require('../config/mongoose');
const Todo = require('../models/todo');

 module.exports.delete = function(req,res){
   let id = req.body.checked; 
   console.log(id);
    console.log(`Prinitng request parameters from delete
                : ${id}`);
                for(let i =0; i<= id.length; i++){
                    Todo.findByIdAndDelete(id, function(err){
                        if(err){
                          console.log("Error in deleting object from DB!!");
                          return;
                        }
                    });
                };
                return res.redirect('back');
 };    //   res.end('from delete..testing'); 

// module.exports.delete = function(req,res){
//   let id = req.query.checked;
//   console.log(`Prinitng request parameters from delete
//                  : ${id}`);
//   Todo.deleteMany(id),function(err)
//   {
//     if(err){
//       console.log("Error in deletinng");
//       return;
//     }    
//   }
//   return res.redirect('back');
// };