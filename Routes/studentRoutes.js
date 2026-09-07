const express = require('express');

const userRoute = express.Router();
const { newStudent, deleteStudent, getAllStudents, getSingleStudent , updateStudent } 
= require('../controller/controller');

userRoute.post('/new-student', newStudent);
userRoute.get('/get-all-students', getAllStudents);
userRoute.get('/get-single-student/:id', getSingleStudent);
userRoute.delete('/delete-student/:id', deleteStudent);
userRoute.patch('/update-student/:id', updateStudent);

module.exports = userRoute;