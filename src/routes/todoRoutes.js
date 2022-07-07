 /**
  * This router file handles routing 
  */

 const router = require('express').Router();

 const controller = require('../controller/todoControllers');

 router
 .get("/", controller.allToDos)
 .post("/", controller.createTodo)
 .get("/:id", controller.OneToDo)
 .put("/:id", controller.updateTodo)
 .delete("/:id", controller.deleteTodo);
 



 module.exports = router;