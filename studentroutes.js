//student routes

const studentcontroller = require("../controllers/studentcontroller")

const express = require("express")
const studentrouter  = express.Router()

studentrouter.post("/insertstudent",studentcontroller.insertstudent)
studentrouter.post("/checkstudentlogin",studentcontroller.checkstudentlogin)

module.exports = studentrouter