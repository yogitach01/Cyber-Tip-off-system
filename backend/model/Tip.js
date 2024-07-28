import mongoose  from "mongoose";

const tipschema=new mongoose.Schema({
    contact:{
        type:String,
        required:true
    },
    score:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    desc:{
        type:String,
      
    },
    time:{
        type:Date,
        required:true
    },
    typeofcrime:{
        type:String,
        required:true
    }
    
    

})

const Tip=mongoose.model('tip',tipschema);
export default Tip;