const Student = require("../models/Student")
const Faculty = require("../models/Faculty")
const Admin=require("../models/Admin");

 const viewstudents = async (request, response) => 
 {
    try 
    {
      const students= await Student.find();
      if(students.length==0)
      {
        response.send("DATA NOT FOUND");
      }
      else
      {
        response.json(students);
      }
    } 
    catch (error) 
    {
      response.status(500).send(error.message);
    }
  };
  const deletestudent = async (request, response) => 
 {
    try 
    {
      const email = request.params.email
      const student= await Student.findOne({"email":email})
      if(student!=null)
      {
        await Student.deleteOne({"email":email})
        response.send("Deleted Successfully")
      }
      else
      {
        response.send("Email ID Not Found")
      }

    } 
    catch (error) 
    {
      response.status(500).send(error.message);
    }
  };
  const viewfacultys = async (request, response) => 
  {
     try 
     {
       const facultys= await Faculty.find();
       if(facultys.length==0)
       {
         response.send("DATA NOT FOUND");
       }
       else
       {
         response.json(facultys);
       }
     } 
     catch (error) 
     {
       response.status(500).send(error.message);
     }
   };
   const deletefaculty= async (request, response) => 
  {
     try 
     {
       const email = request.params.email
       const faculty= await Faculty.findOne({"email":email})
       if(faculty!=null)
       {
         await Faculty.deleteOne({"email":email})
         response.send("Deleted Successfully")
       }
       else
       {
         response.send("Email ID Not Found")
       }
 
     } 
     catch (error) 
     {
       response.status(500).send(error.message);
     }
   };

  const checkadminlogin = async (request, response) => 
  {
     try 
     {
       const input = request.body
       console.log(input)
       const admin = await Admin.findOne(input)
       response.json(admin)
     } 
     catch (error) 
     {
       response.status(500).send(error.message);
     }
   };
  

  module.exports = {viewstudents,deletestudent,viewfacultys,deletefaculty,checkadminlogin}