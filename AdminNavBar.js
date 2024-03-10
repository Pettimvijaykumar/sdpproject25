import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import './admin.css'

import AdminHome from './AdminHome';
import ViewStudents from './ViewStudents';
import ViewFacultys from './ViewFacultys';

export default function AdminNavBar() 
{
  return (
    <div>

    <nav>
     <ul>
     <Link to="/">Home</Link>
     <Link to="/viewstudents">View Students</Link>
     <Link to="/ViewFacultys">View Facultys</Link>
     </ul>
     </nav>

         <Routes>
         <Route path="/" Component={AdminHome} exact/>
         <Route path="/viewstudents" Component={ViewStudents} exact/>
         <Route path="/ViewFacultys" Component={ViewFacultys} exact/>
        </Routes>

    </div>
  )
}