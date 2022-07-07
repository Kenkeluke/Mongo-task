 const {Schema, model} = require('mongoose');


 /*creating a schema that each todo data is meant to follow, each new todo must include a title, a description and a timestamp*/

 const todoSchema = new Schema({
    Title: {
      type: String, 
      required: false,
   },
    Description: {type: String, required: false},
    
 }, {timestamps: true}
 );

 const todoModel = model("todos", todoSchema);

 module.exports = todoModel;