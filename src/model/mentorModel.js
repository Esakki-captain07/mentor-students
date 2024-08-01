import mongoose from "./index.js";

const mentorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'mentor name is required']
    },
    students:{
        type:Array,
        default:[]
    },
    status:{
        type:Boolean,
        default:true
    }

},
{
  collection:'Mentor',
  versionKey:false
})

const mentorModel = new mongoose.model('Mentor',mentorSchema)

export default mentorModel