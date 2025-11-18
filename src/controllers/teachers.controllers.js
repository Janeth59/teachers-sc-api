import teachersDaos from "../DAOs/teachers.daos.js";
const teachersControllers = {};
teachersControllers.getAll = (req, res) =>
    {
        teachersDaos.getAll() 
        .then((teachers) => 
            {
                //res.json({
                  //  data: teachers
                //})
                res.render("index.ejs", {teachers});
            })
        .catch((err) => {
            res.status(500).json({
                message: "An error has ocurred",
                error: err
            })
        });
    };

teachersControllers.getOne = async (req, res) =>
{
    teachersDaos.getOne(req.params.teacher_id)
    .then((teacher)=> 
    {
        if(teacher)
        {
            //res.json({data:teacher});
            res.render("edit.ejs", {teacher});
        }
        else
        {
            res.status(404).json({message:"Teacher not found"});
        }
    })
    .catch((error)=>
    {
        res.status(500).json({message: error.message});
    });
};

teachersControllers.insertOne = async (req, res) =>
{
    teachersDaos.insertOne(req.body)
    .then((newTeacher)=> 
    {
        //res.status(201).json({message:"Tecahcer created succesfully", data: newTeacher});
        res.redirect("/api/teachers/getAll");
    })
    .catch((error)=>
    {
        res.status(500).json({message: error.message});
    });
};

teachersControllers.updateOne = (req, res) =>
{
    teachersDaos.updateOne(req.params.teacher_id, req.body)
    .then((updatedTeacher)=>{
        if(updatedTeacher)
        {
          //res.json({
            //message: "Teacher updated succesfully",
            //data: updatedTeacher
           //});
           res.redirect("/api/teachers/getAll");
        }
        else
        {
            res.status(404).json({message:"Teacher not found"});
        }
    })
    .catch((error) => {res.status(500).json({message: error.message})});
};

teachersControllers.deleteOne = (req, res) =>
{
    teachersDaos.deleteOne(req.params.teacher_id)
    .then((deletedTeacher)=>{
        if(deletedTeacher)
        {
          //res.json({
            //message: "Teacher deleted succesfully",
            //data: deletedTeacher
           //});
           res.redirect("/api/teachers/getAll");
        }
        else
        {
            res.status(404).json({message:"Teacher not found"});
        }
    })
    .catch((error) => {res.status(500).json({message: error.message})});
};

export default teachersControllers;