//aqui solo iran las rutas que pertenecen unicamente a las materias
import { Router } from "express";
import subjectsControllers from "../controllers/subjects.controllers.js";
const router = Router();

router.get("/getAll", subjectsControllers.getAll);
router.get("/getOne/:subject_id", subjectsControllers.getOne);
router.post("/insertOne", subjectsControllers.insertOne);
router.put("/updateOne/:subject_id", subjectsControllers.updateOne);
router.delete("/deleteOne/:subject_id", subjectsControllers.deleteOne);

export default router;