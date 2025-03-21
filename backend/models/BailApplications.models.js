import mongoose from "mongoose";

const applicationSchema=new mongoose.Schema({
    CrimeCategory_id:{
        type:String,
        required:true
    },
    lawyerName:{
        type:String,
        required:true
    },
    JudgeName:{
        type:String,
        
    },
    applicantInfo:{
        prisoner_id:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Prisoners'
        },
        Name: {
            type: String,
            required: true,
        },
        FathersName: {
            type: String,
            required: true,
        },
        Phone:{
            type: String,
            required: true,
        },
        AddharNum: {
            type: String,
            required: true,
        },
        AddharImage:{
            type: String,
            required: true,
        },
        ElectionId:{
            type: String,
            required: true,
        },
        Firdate:{
            type:String,
            required:true
        },
        
        Crime: {
            type:Array,
            default:[]
        },
        
          
    },
    Status:{
        type:String,
        default:'Pending',
        
    },
    application_Date:{
        type:Date,
        default:Date.now()
    },
    Descision_Date:{
        type:Date,
        default:null
    },
    Bail_Amount:{
        type:String,
        default:null,

    },
    Condition:{
        type:Object,
        
        default:null
    },
    Descision:{
        type:String,
        default:null
    }
},{timestamps:true})

export const applications=new mongoose.model('applications',applicationSchema)
