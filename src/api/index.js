const express = require("express");
var cors = require('cors')
const bodyParser = require("body-parser");
const connectDB = require("./db");
//importing routes
const urlRoutes = require("./routes/urlRoutes");
//const path = require('path');
const app = express();
const PORT = 4000;

app.use(cors());

//connect to database
connectDB();

//middleware
app.use(bodyParser.json());
//other middlewares
app.use("/", urlRoutes); 
app.use(express.static('public')) ;
app.listen(PORT, ()=>{
console.log(`Server is running on port ${PORT}`);

})