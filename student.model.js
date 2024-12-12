const mongoose = require("mongoose");

//assume as sql structure - defining columns
const studentSchema = new mongoose.Schema({
  name: String,
  regdNo: {
    type: String,
    unique: true,
  },
  department: String,
  email: String,
  mobileNo: Number,
});
//modelling - creating a table
const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
