 /**
  * This todoController file handles the main logic
  * for the CRUD functions for handling todos
  * firstly, the Todos schema are imported
  */

 const Todos = require('../models/todos');

 // to get a list of all the todos

 exports.allToDos = async (req, res) => {
    try {
        let todoList = await Todos.find();
        res.status(200).json({
            success: true,
            message: 'Here is your todo list'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'internal server error: list cannot be displayed',
            error: error.message
        });
    }
 };