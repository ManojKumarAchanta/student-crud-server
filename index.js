//This file is the entry point of the server
const app = require("./src/app");

//connection is a file where we connect to the database

const connectToDB = require("./src/db/connection");

//setting the port

const PORT = process.env.PORT || 3000;

//starting the server

app.listen(PORT, () => {
  //connecting to the database
  connectToDB();
  console.log("http://localhost:" + PORT);
});
