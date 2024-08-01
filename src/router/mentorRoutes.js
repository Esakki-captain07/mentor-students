import { Router } from "express";
import mentorService from "../service/mentorService.js";

const routes = Router()

routes.post('/',mentorService.createMentor)
routes.get('/students-for-mentor',mentorService.studentsForMentor)


export default routes