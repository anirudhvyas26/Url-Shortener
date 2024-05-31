const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./db");
//importing routes
const urlRoutes = require("./routes/urlRoutes");
const path = require('path');
const app = express();
const PORT = 4000;

//connect to database
connectDB();

//middleware
app.use(bodyParser.json());
//other middlewares
app.use("/", urlRoutes); 
app.use(express.static(__dirname + '/../public')) ;
app.listen(PORT, ()=>{
console.log(`Server is running on port ${PORT}`);

})