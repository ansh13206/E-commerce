const mongoose = require('mongoose');
require("dotenv").config();

module.exports.init = async function(){
    await mongoose.connect('mongodb+srv://ansh13206:Ansh123@cluster0.vlk1rwn.mongodb.net/?retryWrites=true&w=majority');
    console.log("Successfully connected to DB");
}