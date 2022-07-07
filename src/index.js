const express = require('express');
const {json} = require('express');
const connect = require('./config/database');
const todoRoute = require('./routes/todoRoutes');

connect();


const app = express();
app.use("/", todoRoute);
app.use(json()); 


const PORT  = process.env.PORT || 9000;

app.get('/', (req, res) =>{
   try {
    res.status(200).send("To-do App o n sare running with Mondo DB")
   } catch (err) {
    res.status(500).send(err.message)
    
   }
})

app.listen(PORT, () => console.log(`Server is up and running on port ${PORT}`));