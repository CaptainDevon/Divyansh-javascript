import mongoose from 'mongoose';

const userSchema=new mongoose.Schema(
    {
        firstName:{type: String, required:true},
        middleName:{type:String},
        lastName:{type:String,required:true},
        email:{type:String,required:true,unique:true},
        age:{type:Number},
        time:{type:Date,default:Date.now}
    }
);


const User=mongoose.model("User",userSchema);

export default User;

