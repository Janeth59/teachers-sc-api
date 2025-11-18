//import Student from "../models/Student.js";
import Student from "../models/students.js";
const studentsDaos = {};

//method to get all students
studentsDaos.getAll = async() =>
{
   //aqui le voy a pedir paro al modelo de mongoose para extraer los estudientes de mi cluster
   const students = await Student.find();
   return students;
};

//method to get a student by student_id
studentsDaos.getOne = async (student_id) => 
{
   const student = await Student.findOne({ student_id: student_id});
   return student;
};

//method to create a new student
studentsDaos.insertOne = async(studentData) =>
{
    const newStudent = await Student.create(studentData);
    return newStudent;
};

//method to update students by student_id
studentsDaos.updateOne = async (student_id, updateData) =>
{
   const updatedStudent = await Student.findOneAndUpdate
   ({student_id: student_id}, updateData);
   return updatedStudent;
};

//method to delete a student by student_id
studentsDaos.deleteOne = async (student_id) =>
{
   const deletedStudent = await Student.findOneAndDelete
   ({student_id: student_id});
   return deletedStudent;
};

export default studentsDaos;