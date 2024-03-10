import React from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import Home from './Home'
import About from './About'
import './style.css'
import Contact from './Contact';
import Registration from './../student/Registration';
import StudentLogin from './../student/StudentLogin';
import FacultyLogin from './../faculty/FacultyLogin';
import AdminLogin from './../admin/AdminLogin';




export default function MainNavBar() 
{
  return (
    <div>
        <nav>
          <ul>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/registration">Registration</Link>
            <Link to="/studentlogin">Student Login</Link>
            <Link to="/facultylogin">Faculty Login </Link>
            <Link to="/adminlogin">Admin Login</Link>
            <Link to="/contact">Contact</Link>
          </ul>
        </nav>
     
     <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path="/about" element={<About/>} exact/>
        <Route path="/registration" element={<Registration/>} exact/>
        <Route path="/studentlogin" element={<StudentLogin/>} exact/>
        <Route path="/facultylogin" element={<FacultyLogin/>} exact/>
        <Route path="/adminlogin" element={<AdminLogin/>} exact/>
        <Route path="/contact" element={<Contact/>} exact/>

     </Routes>
    



    </div>
  )
}
