const mongoose = require("mongoose");
require('dotenv').config();
const connectDB = async ()=>{
    try{
        console.log(process.env.MONGO_URL);
await mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
console.log("Database Connected");
    }catch(err){
        console.error("Error connecting to database : " , err) ;
    }
}

module.exports = connectDB;