import subjectsDaos from "../DAOs/subject.daos.js";
const subjectsControllers = {};

subjectsControllers.getAll = (req, res) =>
    {
        subjectsDaos.getAll()
        .then((subjects) => 
            {
                res.json({
                    data: subjects
                })
            })
        .catch((err) => {
            res.status(500).json({
                message: "An error has ocurred",
                error: err
            })
        });
    };

subjectsControllers.getOne = async (req, res) =>
{
    subjectsDaos.getOne(req.params.subject_id)
    .then((subject)=> 
    {
        if(subject)
        {
            res.json({data:subject});
        }
        else
        {
            res.status(404).json({message:"Subject not found"});
        }
    })
    .catch((error)=>
    {
        res.status(500).json({message: error.message});
    });
};

subjectsControllers.insertOne = async (req, res) =>
{
    subjectsDaos.insertOne(req.body)
    .then((newSubject)=> 
    {
        res.status(201).json({message:"Subject created succesfully", data: newSubject});
    })
    .catch((error)=>
    {
        res.status(500).json({message: error.message});
    });
};

subjectsControllers.updateOne = (req, res) =>
{
    subjectsDaos.updateOne(req.params.subject_id, req.body)
    .then((updatedSubject)=>{
        if(updatedSubject)
        {
          res.json({
            message: "Subject updated succesfully",
            data: updatedSubject
           });
        }
        else
        {
            res.status(404).json({message:"Subject not found"});
        }
    })
    .catch((error) => {res.status(500).json({message: error.message})});
};

subjectsControllers.deleteOne = (req, res) =>
{
    subjectsDaos.deleteOne(req.params.subject_id)
    .then((deletedSubject)=>{
        if(deletedSubject)
        {
          res.json({
            message: "Subject deleted succesfully",
            data: deletedSubject
           });
        }
        else
        {
            res.status(404).json({message:"Subject not found"});
        }
    })
    .catch((error) => {res.status(500).json({message: error.message})});
};

export default subjectsControllers;