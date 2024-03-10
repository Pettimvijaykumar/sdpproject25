const facultycontroller = require("../controllers/facultycontroller")

const express = require("express")
const facultyrouter = express.Router()

// faculty routes
facultyrouter.post("/insertfaculty",facultycontroller.insertfaculty)
facultyrouter.post("/checkfacultylogin",facultycontroller.checkfacultylogin)


module.exports = facultyrouter