//aqui solo iran las rutas que pertenecen unicamente a los estudiantes
//si existe otro archivo/modelo como teachers se usa un archivo diferente
import { Router } from "express";
import studentsControllers from "../controllers/students.controllers.js";//doble punto para que se salga de la carpeta en la que esta y pueda entrar a otra
const router = Router();

router.get("/getAll", studentsControllers.getAll); 
router.get("/getOne/:student_id", studentsControllers.getOne);
router.post("/insertOne", studentsControllers.insertOne);
router.post("/updateOne/:student_id", studentsControllers.updateOne);//se cambia por post por que es como si lo insertaras
router.get("/deleteOne/:student_id", studentsControllers.deleteOne);//aqui  aunque ya no sea por delete funciona igual

export default router;