import mongoose from "./index.js";

const studentsSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Student name is required']
    },
    mentor:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Mentor',
        default:null
    },
    status:{
        type:Boolean,
        default:true
    }

},
{
  collection:'Stuents',
  versionKey:false
})

const studentsModel = new mongoose.model('Students',studentsSchema)

export default studentsModel