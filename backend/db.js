const mongoose = require("mongoose");

const mongoURI = `mongodb+srv://Ambuj123:Ambuj123@cluster0.xn7wc.mongodb.net/warrentyMe?retryWrites=true&w=majority`;

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected  successfully")
    })
}

module.exports = connectToMongo
