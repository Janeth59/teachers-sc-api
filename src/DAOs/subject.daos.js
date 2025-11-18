import Subject from "../models/Subject.js";
const subjectsDaos = {};

//method to get all subjetcs
subjectsDaos.getAll = async() =>
{
   const subjects = await Subject.find();
   return subjects;
};

//method to get a subject by subject_id
subjectsDaos.getOne = async (subject_id) => 
{
   const subject = await Subject.findOne({ subject_id: subject_id});
   return subject;
};

//method to create a new subject
subjectsDaos.insertOne = async(subjectData) =>
{
    const newSubject = await Subject.create(subjectData);
    return newSubject;
};

//method to update sunjects by subject_id
subjectsDaos.updateOne = async (subject_id, updatedData) =>
{
   const updatedSubject = await Subject.findOneAndUpdate
   ({subject_id: subject_id}, updatedData);
   return updatedSubject;
};

//method to delete a subject by subect_id
subjectsDaos.deleteOne = async (subject_id) =>
{
   const deletedSubject = await Subject.findOneAndDelete
   ({subject_id: subject_id});
   return deletedSubject;
};

export default subjectsDaos;