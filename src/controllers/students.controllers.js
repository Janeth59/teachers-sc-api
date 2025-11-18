//Aqui van las funciones (req, res) => {} para poderlas usar en las ruytas
import studentsDaos from "../daos/students.daos.js";
const studentsControllers = {};//esto es un objeto vacio json
studentsControllers.getAll = (req, res) =>
    {
        //aqui le vamos a pedir los datos al DAO 
        studentsDaos.getAll()
        .then((students) => 
            {
                //res.json({
                  //  data: students
                //})
                res.render("index.ejs", {students});//esto es para responder el codigo index html, renderizando respuesta
            })
        .catch((err) => {
            res.status(500).json({
                message: "An error has ocurred",
                error: err
            })
        });
        //Aqui vamis a responder al cliente
    };

studentsControllers.getOne = async (req, res) =>
{
    studentsDaos.getOne(req.params.student_id)
    .then((student)=> 
    {
        if(student)
        {
            //res.json({data:student});
            res.render("edit.ejs", {student});
        }
        else
        {
            res.status(404).json({message:"Student not found"});
        }
    })
    .catch((error)=>
    {
        res.status(500).json({message: error.message});
    });
};

studentsControllers.insertOne = async (req, res) =>
{
    studentsDaos.insertOne(req.body)
    .then((newStudent)=> 
    {
        //res.status(201).json({message:"Student created succesfully", data: newStudent});
        res.redirect("/api/students/getAll");
    })
    .catch((error)=>
    {
        res.status(500).json({message: error.message});
    });
};

studentsControllers.updateOne = (req, res) =>
{
    studentsDaos.updateOne(req.params.student_id, req.body)
    .then((updatedStudent)=>{
        if(updatedStudent)
        {
          //res.json({
            //message: "Student updated succesfully",
            //data: updatedStudent
           //});
           res.redirect("/api/students/getAll");
        }
        else
        {
            res.status(404).json({message:"Student not found"});
        }
    })
    .catch((error) => {res.status(500).json({message: error.message})});
};

studentsControllers.deleteOne = (req, res) =>
{
    studentsDaos.deleteOne(req.params.student_id)
    .then((deletedStudent)=>{
        if(deletedStudent)
        {
          //res.json({
            //message: "Student deleted succesfully",
            //data: deletedStudent
           //});
           res.redirect("/api/students/getAll");
        }
        else
        {
            res.status(404).json({message:"Student not found"});
        }
    })
    .catch((error) => {res.status(500).json({message: error.message})});
};

export default studentsControllers;