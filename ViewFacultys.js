import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ViewFacultys() {
  const [facultys, setFacultys] = useState([]);

  const fetchFacultys = async () => {
    try {
      const response = await axios.get('http://localhost:2014/viewfacultys');
      setFacultys(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchFacultys();
  }, []);

  const deleteFaculty= async (email) => {
    try {
      await axios.delete(`http://localhost:2014/deletefaculty/${email}`);
      fetchFacultys();
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Facultys</h1>
      
      <table border={1} align="center" style={{ width: 'auto', height: 'auto' }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Full Name</th>
              <th>Gender</th>
              <th>Date of Birth</th>
              <th>Email</th>
              <th>Location</th>
              <th>Contact</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
  {Array.isArray(facultys) && facultys.length > 0 ? (
    facultys.map((faculty, index) => (
      <tr key={index}>
        <td>{faculty.ID}</td>
        <td>{faculty.fullname}</td>
        <td>{faculty.gender}</td>
        <td>{faculty.dateofbirth}</td>
        <td>{faculty.email}</td>
        <td>{faculty.location}</td>
        <td>{faculty.contact}</td>
        <td>
          <button onClick={() => deleteFaculty(faculty.email)} className='button'>Delete</button>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="7">Data Not Found</td>
    </tr>
  )}
</tbody>
        </table>
    </div>
  );
}