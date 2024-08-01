import { Router } from "express";
import studentsService from "../service/studentsService.js";

const routes = Router()

routes.post('/',studentsService.createStudent)
routes.get('/without-mentor',studentsService.getStudentsWithoutMentor)
routes.get('/mentor-for-students',studentsService.mentorForStudent)


export default routes