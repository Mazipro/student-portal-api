const express = require('express');

const userRoute = express.Router();
const { newStudent, deleteStudent, getAllStudents, getSingleStudent, updateStudent } 
= require('../controller/controller');

// Clean RESTful endpoints
userRoute.post('/', newStudent);               // POST http://localhost:3000/api/students
userRoute.get('/', getAllStudents);            // GET  http://localhost:3000/api/students
userRoute.get('/:id', getSingleStudent);       // GET  http://localhost:3000/api/students/123
userRoute.delete('/:id', deleteStudent);       // DELETE http://localhost:3000/api/students/123
userRoute.patch('/:id', updateStudent);        // PATCH http://localhost:3000/api/students/123

module.exports = userRoute;