//controller for student
const Student = require("../models/student.model");
//insert many students
const insertStudents = async (req, res) => {
  try {
    //body is an object which contains the data
    const body = req.body;
    //data is an array of objects
    console.log(body.data);
    //insertMany is a method in mongoose which is used to insert multiple documents into the collection
    await Student.insertMany(body.data);
    //returning the response 200 status code with a message representing the success
    return res
      .status(200)
      .json({ status: "success", message: "Inserted Successfully" });
  } catch (e) {
    return res.status(400).json({ status: "fail", message: e.message });
  }
};
//get all students
const getStudents = async (req, res) => {
  try {
    //finding all the students
    const students = await Student.find({});
    //returning the response 200 status code with the students
    return res.status(200).json({ status: "success", students });
  } catch (e) {
    console.log(e);
    return res.status(400).json({ status: "fail", message: e.message });
  }
};
//get student by regdNo
const getStudentByRegdNo = async (req, res) => {
  try {
    //regdNo is a parameter which is passed in the URL
    const regdNo = req.params.id;
    //finding the student by regdNo
    const student = await Student.findOne({ regdNo });
    //returning the response 200 status code with the student
    return res.status(200).json({ status: "success", student });
  } catch (e) {
    console.log(e);
    return res.status(400).json({ status: "fail", message: e.message });
  }
};
//add new student
const addStudent = async (req, res) => {
  try {
    //name, email, regdNo, mobileNo, department are the fields in the student model
    const { name, email, regdNo, mobileNo, department } = req.body;
    //creating a new student
    const newStudent = new Student({
      name,
      email,
      department,
      regdNo,
      mobileNo,
    });
    //saving the student
    await newStudent.save();
    //returning the response 200 status code with the new student
    return res.status(200).json({ status: "success", newStudent });
  } catch (e) {
    console.log(e);

    return res.status(400).json({ status: "fail", message: e.message });
  }
};
//update student details
const updateStudent = async (req, res) => {
  try {
    //regdNo is a parameter which is passed in the URL
    const regdNo = req.params.id;
    //finding the student by regdNo
    const student = await Student.findOne({ regdNo });
    //updating the student details
    await Student.findByIdAndUpdate(student._id, req.body);
    //returning the response 200 status code with the updated student
    return res.status(200).json({ status: "success", student: req.body });
  } catch (e) {
    console.log(e);

    return res.status(400).json({ status: "fail", message: e.message });
  }
};
const deleteStudent = async (req, res) => {
  try {
    //  regdNo is a parameter which is passed in the URL
    const regdNo = req.params.id;
    //finding the student by regdNo
    const student = await Student.findOne({ regdNo });
    //deleting the student
    const deletedStudent = await Student.findByIdAndDelete(student._id);
    //returning the response 204 status code with the deleted student
    return res.status(204).json({ status: "success", deletedStudent });
  } catch (e) {
    console.log(e);
    return res.status(400).json({ status: "fail", message: e.message });
  }
};
//exporting the functions
module.exports = {
  deleteStudent,
  addStudent,
  updateStudent,
  insertStudents,
  getStudents,
  getStudentByRegdNo,
};
