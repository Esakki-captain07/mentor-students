import { Router } from "express";
import assiningService from "../service/assiningService.js";
const routes = Router();

routes.post('/student-to-mentor', assiningService.assignStudentToMentor);
routes.post('/assign-or-change',assiningService.assignOrChange)

export default routes;
