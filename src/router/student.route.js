const {
  deleteStudent,
  addStudent,
  updateStudent,
  insertStudents,
  getStudents,
  getStudentByRegdNo,
} = require("../controllers/student.controller");
//express is a package which is used to create a server
const express = require("express");
//router is a method in express which is used to create routes
const router = express.Router();
//demo endpoint
router.get("/", (req, res) => {
  res.send("Hello World");
});
//insert many students
router.post("/insertstudents", insertStudents);
//get all students
router.get("/getstudents", getStudents);
//get student by regdNo
router.get("/:id", getStudentByRegdNo);
//add new student
router.post("/addstudent", addStudent);
//update student details

router.put("/:id", updateStudent);

//delete student
router.delete("/:id", deleteStudent);

module.exports = router;
