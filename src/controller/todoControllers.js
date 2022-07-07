 /**
  * This todoController file handles the main logic
  * for the CRUD functions for handling todos
  * firstly, the Todos schema are imported
  */

 const { request } = require('express');
const Todos = require('../models/todos');

 // to get a list of all the todos

 exports.allToDos = async (req, res) => {
    try {
        let todoList = await Todos.find();
        if (todoList.length === 0) {
            return res.send({
                message: "You haven't created any to-dos yet, get started by creating one",
            })
        }
        res.status(200).json({
            success: true,
            message: 'Here is your todo list',
            count: todoList.length,
            todoList,
            
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'internal server error: list cannot be displayed',
            error: error.message
        });
    }
 };

// To create a new to-do
exports.createTodo = async (req, res) => {
    try {
        let newest = await req.body;
        let newTodo =  await Todos.create(newest);
        if(!newTodo) {
            return res.status(400).json({
                success: false,
                message: "To-do list was not created, try again,"
            })}
        return res.status(201).json({
            success: true,
            message: "New to-do added succesfully",
            newest: newTodo,

        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "internal server error",
            error: error.message,
        })
        
    }
}

// To get a single to-do
 exports.OneToDo = async (req, res) => {
try {
    let id = {_id: req.params.id};
    let AtoDo = await Todos.findOne(id);
    if(!AtoDo){
        return res.status(404).json({
            success: false,
            message: "I can''t find the to-do you ar e looking for",
        })
    }

    res.status(200).json({
        success: true,
        message: "Here's the to-do you were looking for :",
        AtoDo,
    })


} catch (error) {
    res.status(500).json({
        sucess: false,
        message: "internal server error",
        error: err.message,
    })
    
}
 };

// To update single to-do
exports.updateTodo = async (req, res) => {
    try {
        let id = {_id: req.params.id};
        let updateOne = await req.body;
        let update = await Todos.findOneAndUpdate(id, updateOne, {new:true});
        if(!update){
            return res.status(404).json({
                success: false,
                message: "I can't update the to-do you requested",
            })
        }
    
        res.status(200).json({
            success: true,
            message: " To-do has been updated",
            updateOne: update,
        })
    
    
    } catch (error) {
        res.status(500).json({
            sucess: false,
            message: "internal server error",
            error: err.message,
        })
        
    }
     };


     // To Delete a single to-do
exports.deleteTodo = async (req, res) => {
    try {
        let id = {_id: req.params.id};
        let deleteOne = await req.body;
        let deleted = await Todos.findOneAndRemove(id);
        if(!deleted){
            return res.status(404).json({
                success: false,
                message: "I can't delete this to-do you requested",
            })
        }
    
        res.status(200).json({
            success: true,
            message: " To-do has been deleted sucessfully",
            deleteOne: deleted,
        })
    
    
    } catch (error) {
        res.status(500).json({
            sucess: false,
            message: "internal server error",
            error: err.message,
        })
        
    }
     };