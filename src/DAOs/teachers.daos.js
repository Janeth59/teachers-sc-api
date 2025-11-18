import Teacher from "../models/Teachers.js";
const teachersDaos = {};

//method to get all teachers
teachersDaos.getAll = async() =>
{
   const teachers = await Teacher.find();
   return teachers;
};

//method to get a teacher by teacher_id
teachersDaos.getOne = async (teacher_id) => 
{
   const teacher = await Teacher.findOne({ teacher_id: teacher_id});
   return teacher;
};

//method to create a new teacher
teachersDaos.insertOne = async(teacherData) =>
{
    const newTeacher = await Teacher.create(teacherData);
    return newTeacher;
};

//method to update teachers by tecaher_id
teachersDaos.updateOne = async (teacher_id, updatedData) =>
{
   const updatedTeacher = await Teacher.findOneAndUpdate
   ({teacher_id: teacher_id}, updatedData);
   return updatedTeacher;
};

//method to delete a tecaher by tecaher_id
teachersDaos.deleteOne = async (teacher_id) =>
{
   const deletedTeacher = await Teacher.findOneAndDelete
   ({teacher_id: teacher_id});
   return deletedTeacher;
};

export default teachersDaos;