import mentorModel from '../model/mentorModel.js';
import studentsModel from '../model/studentsModel.js';

const assignStudentToMentor = async (req, res) => {
    try {
        const { studentId, mentorId } = req.body;

        const mentor = await mentorModel.findById(mentorId);
        if (!mentor) {
            console.log(mentorId)
            return res.status(404).send({ message: "Mentor not found" });
        }

        const student = await studentsModel.findById(studentId);
        if (!student) {
            return res.status(404).send({ message: "Student not found" });
        }

        if (student.mentor) {
            return res.status(400).send({ message: "Student is already assigned to a mentor" });
        }

        student.mentor = mentorId;
        await student.save();

        mentor.students.push(studentId);
        await mentor.save();

        res.status(200).send({ message: "Student assigned to mentor successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: error.message || "Internal Server Error",
            error
        });
    }
}

const assignOrChange = async(req,res)=>{
    try {
        const { studentId, mentorId } = req.body;

        if (!studentId || !mentorId) {
            return res.status(400).send({ message: "Student ID and Mentor ID are required" });
        }

        const mentor = await mentorModel.findById(mentorId);
        if (!mentor) {
            return res.status(404).send({ message: "Mentor not found" });
        }



        const student = await studentsModel.findById(studentId);
        if (!student) {
            return res.status(404).send({ message: "Student not found" });
        }

        if (student.mentor) {
            const previousMentor = await mentorModel.findById(student.mentor);
            if (previousMentor) {
                previousMentor.students = previousMentor.students.filter(id => id.toString() !== studentId);
                await previousMentor.save();
            }
        }

        student.mentor = mentorId;
        await student.save();

        mentor.students.push(studentId);
        await mentor.save();

        res.status(200).send({ message: "Student assigned to new mentor successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: error.message || "Internal Server Error",
            error
        });
    }
       
}

export default {
    assignStudentToMentor,
    assignOrChange
};
