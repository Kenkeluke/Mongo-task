const express = require('express');

const app = express();
const PORT  = process.env.PORT || 9000;

app.get('/', (req, res) =>{
   try {
    res.status(200).send("To-do App running with Mondo DB")
   } catch (err) {
    res.status(500).send(err.message)
    
   }
})

app.listen(PORT, () => console.log(`Server is up and running on port ${PORT}`));