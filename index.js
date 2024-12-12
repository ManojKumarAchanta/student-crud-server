const express = require("express");
const cors = require("cors");
const connectToDB = require("./connection");
const Student = require("./student.model");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());
//test route
app.get("/", (req, res) => {
  res.send("Hello World");
});
//insert many students
app.post("/insertstudents", async (req, res) => {
  try {
    const body = req.body;
    console.log(body.data);
    await Student.insertMany(body.data);
    return res
      .status(200)
      .json({ status: "success", message: "Inserted Successfully" });
  } catch (e) {
    return res.status(400).json({ status: "fail", message: e.message });
  }
});
//get all students
app.get("/getstudents", async (req, res) => {
  try {
    const students = await Student.find({});
    return res.status(200).json({ status: "success", students });
  } catch (e) {
    console.log(e);
    return res.status(400).json({ status: "fail", message: e.message });
  }
});
//get student by regdNo
app.get("/:id", async (req, res) => {
  try {
    const regdNo = req.params.id;
    const student = await Student.findOne({ regdNo });
    return res.status(200).json({ status: "success", student });
  } catch (e) {
    console.log(e);
    return res.status(400).json({ status: "fail", message: e.message });
  }
});
//add new student
app.post("/addstudent", async (req, res) => {
  try {
    const { name, email, regdNo, mobileNo, department } = req.body;
    const newStudent = new Student({
      name,
      email,
      department,
      regdNo,
      mobileNo,
    });
    await newStudent.save();
    return res.status(200).json({ status: "success", newStudent });
  } catch (e) {
    console.log(e);
    return res.status(400).json({ status: "fail", message: e.message });
  }
});
//update student details

app.put("/:id", async (req, res) => {
  try {
    const regdNo = req.params.id;
    const student = await Student.findOne({ regdNo });
    const updatedStudent = await Student.findByIdAndUpdate(
      student._id,
      req.body
    );
    return res.status(200).json({ status: "success", updatedStudent });
  } catch (e) {
    console.log(e);
    return res.status(400).json({ status: "fail", message: e.message });
  }
});

//delete student
app.delete("/:id", async (req, res) => {
  try {
    const regdNo = req.params.id;
    const student = await Student.findOne({ regdNo });
    const deletedStudent = await Student.findByIdAndDelete(student._id);
    return res.status(204).json({ status: "success", deletedStudent });
  } catch (e) {
    console.log(e);
    return res.status(400).json({ status: "fail", message: e.message });
  }
});

app.listen(port, () => {
  connectToDB();
  console.log("http://localhost:3000");
});
