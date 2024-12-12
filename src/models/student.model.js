//model - defining the structure of the table
const mongoose = require("mongoose");
//In MongoDB as data is stored in JSON format, we don't need to define the structure of the table
//But in mongoose, we need to define the structure of the table(Schema)
//assume as sql structure - defining columns
const studentSchema = new mongoose.Schema({
  //name of the column: {type: datatype, required: true}
  name: { type: String, required: true },
  //unique - no two students can have the same regdNo
  //required
  regdNo: {
    type: String,
    unique: true,
    required: true,
  },
  //department is required
  department: {
    type: String,
    required: true,
  },
  //email is unique
  //email is not required
  email: {
    type: String,
    unique: true,
    required: true,
  },
  //mobileNo is required
  mobileNo: { type: Number, required: true },
});

//modelling the schema
const Student = mongoose.model("Student", studentSchema);

//exporting the model
module.exports = Student;
