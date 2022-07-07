const mongoose = require('mongoose');
const { config } = require('dotenv');

config();

async function connect(uri) {
   try {
    mongoose.connect(uri || 'mongodb://127.0.0.1/27017')
    console.log("Your app is connected to the Mongo DB database")
   } catch (error) {
    console.log(error.message)
    
   }
}

module.exports = connect;