import { Router } from "express";
import 'dotenv/config.js'
import mentorRoutes from './mentorRoutes.js'
import studentRoutes from './studentsRoutes.js'
import assiningRoutes from "./assignMentorRoutes.js";


const routes = Router()

routes.get('/',(req,res)=>{
    res.send(`<div>
            <h1>Welcome to Backend of Assign Mentor & Students</h1>
            <p>Please refer postman collections for API endpoints</p>
        </div>`)
    })

routes.use('/mentor',mentorRoutes)
routes.use('/students',studentRoutes)
routes.use('/assign',assiningRoutes)
export default routes 