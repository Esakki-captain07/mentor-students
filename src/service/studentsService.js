import studentsModel from "../model/studentsModel.js";

const createStudent = async(req,res)=>{
    try {
        let student = await studentsModel.findOne({name:req.body.name})
        if(!student){
            await studentsModel.create(req.body)
            res.status(201).send({
                message:"student created successfull"
            })
        }
        else{
            res.status(400).send({
                message:`student already loged in this ${req.body.name}`
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

const studentsWithoutMentor = async (req, res) => {
    try {
        const students = await studentsModel.find({ mentor: null });
        res.status(200).send(students);
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: error.message || "Internal Server Error",
            error
        });
    }
}

const mentorForStudent = async(req,res)=>{
    try {
        let {studentId}= req.params
        let student = await studentsModel.findById(studentId)
        if(!student){
            res.status(400).send({
                message:error.message
            })
        }
        if (!student.mentor) {
            return res.status(404).send({ 
                message: "Student is not assigned to any mentor"
             });
        }

        res.status(200).send(student.mentor);
    } catch (error) {
        
    }
}

export default{
    createStudent,
    studentsWithoutMentor,
    mentorForStudent
}