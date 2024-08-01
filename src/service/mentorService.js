import mentorModel from "../model/mentorModel.js"
import studentsModel from "../model/studentsModel.js"

const createMentor = async(req,res)=>{
    try {
        let mentor = await mentorModel.findOne({name:req.body.name})
        if(!mentor)
        {
            await mentorModel.create(req.body)

            res.status(201).send({
                message:"Mentor Created Successfully"
            })
        }
        else
        {
            res.status(400).send({
                message:`Mentor with email ${req.body.name} already exists`
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message:error.message || "Internal Server Error",
            error
        })
    }
}

const studentsForMentor = async(req,res)=>{
    try {
        let {mentorId}= req.params
        const mentor = await mentorModel.find(mentorId)
        if(!mentor){
            res.status(400).send({
                message: error.message
            })
        }

        const students = await studentsModel.find({mentor:mentorId})
        res.status(200).send({
            message:students
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: error.message || "Internal Server Error",
            error
        });
    }
}

export default {
    createMentor,
    studentsForMentor
}