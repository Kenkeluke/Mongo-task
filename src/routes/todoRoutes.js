 /**
  * This router file handles routing 
  */

 const router = require('express').Router();

 const controller = require('../controller/todoControllers');

 router
 .get("/", controller.allToDos);



 module.exports = router;