const mongoose = require("mongoose");
//mongoose is a package which is used to connect to the MongoDB database

const connectToDB = async () => {
  try {
    //connecting to the MongoDB database
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connected to MONGODB");
  } catch (e) {
    console.log(e);
  }
};
//exporting the connectToDB function
module.exports = connectToDB;
