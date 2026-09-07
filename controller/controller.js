const Student = require('../model/studentModel.js');

const newStudent = async (request, respond) => {
  try {
    const { name, regNo, email } = request.body;
    const student = await Student.create({ name, regNo, email });
    respond.status(201).json({
      message: 'Student account created successfully',
      data: student
    });
  } catch (error) {
    respond.status(500).json({ message: 'Error creating student account', error });
  }
}
const getAllStudents = async (request, respond) => {
  try {
    const allStudents = await Student.find();
    respond.status(200).json({
      message: 'Students retrieved successfully',
      data: allStudents
    });
  } catch (error) {
    return respond.status(500).json({
      message: 'Error retrieving students', error
    });
  }
}

const updateStudent = async (request, respond) => {
  try {
    const student = await Student.findById(request.params.id);
    if (!student) return respond.status(404).json({
      message: "Student not found"
    });

    const { name, regNo, email } = request.body;

    const regNoChanged = regNo !== undefined && regNo !== student.regNo;
    const emailChanged = email !== undefined && email !== student.email;
    if (regNoChanged || emailChanged) {
      return respond
        .status(400)
        .json({ message: "Registration number and email cannot be changed" });
    }
    if (name === undefined) {
      return respond.status(400).json({ message: "Name is required" });
    }

    student.name = name;
    await student.save();
    return respond.status(200).json({
      message: 'Profile updated successfully',
      data: student
    });
  } catch (error) {
    if (error.name === "CastError")
      return respond.status(400).json({
        message: "Invalid student id"
      });
    respond.status(500).json({
      message: error.message
    });
  }
}

const deleteStudent = async (request, respond) => {
  try {
    const student = await Student.findByIdAndDelete(request.params.id);
    if (!student) return respond.status(404).json({ message: "Student not found" });
    respond.status(200).json({ message: "Student deleted successfully" });
  } catch (error) {
    if (error.name === "CastError")
      return respond.status(400).json({ message: "Invalid student id" });
    respond.status(500).json({ message: error.message });
  }
};

const getSingleStudent = async (request, respond) => {
  try {
    const student = await Student.findById(request.params.id);
    if (!student) return respond.status(404).json({ message: "Student not found" });
    respond.status(200).json({
      message: 'Student retrieved successfully',
      data: student
    });
  } catch (error) {
    if (error.name === "CastError")
      return respond.status(400).json({ message: "Invalid student id" });
    respond.status(500).json({ message: error.message });
  }
};

module.exports = {
  newStudent,
  getAllStudents,
  getSingleStudent,
  updateStudent,
  deleteStudent
};