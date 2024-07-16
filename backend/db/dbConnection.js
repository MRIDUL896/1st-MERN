const mongoose = require("mongoose");

const connectedDB = async (req,res) => {
    try{
        await mongoose.connect('mongodb://localhost:27017/Credentials');
        console.log("connected to mongodb");
    }catch(err){
        res.json({"message" : err});
    }
}

module.exports = connectedDB;