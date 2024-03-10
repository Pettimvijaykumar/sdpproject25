//admin routes
const admincontroller = require("../controllers/admincontroller")

const express = require("express")
const adminrouter  = express.Router()


adminrouter.get("/viewstudents",admincontroller.viewstudents)
adminrouter.delete("/deletestudent/:email",admincontroller.deletestudent)
adminrouter.post("/checkadminlogin",admincontroller.checkadminlogin)
adminrouter.get("/viewfacultys",admincontroller.viewfacultys)
adminrouter.delete("/deletefaculty/:email",admincontroller.deletefaculty)

module.exports = adminrouter