//app.js is the main Applcation file 
const express = require("express");
//cors is a package which is used to provide access to the server from different origins
const cors = require("cors");

//importing the student model
const Student = require("./models/student.model");
//dotenv is a package which is used to access the environment variables
const dotenv = require("dotenv");
//importing the controllers from student.controller.js
const router = require("./router/student.route");

//configuring the environment variables
dotenv.config({ path: "./.env" });

//creating an instance of express
const app = express();


//built-in middleware
app.use(cors());

//parse the incoming request with JSON payloads
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//initializing a custom middleware
app.use("/", router);

//listening to the port

module.exports=app; 