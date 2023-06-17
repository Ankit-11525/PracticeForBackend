const mongoose=require('mongoose');
const Schema = mongoose.Schema;
const UserSchema=new Schema({
    name:{
        type:String,
        required:[true,"must be filled"],
    },
    password:{
        type:String,
        required:true,
        minLength:4,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    }

});
const Usermodel= mongoose.model('Usermodel', UserSchema);
module.exports =Usermodel;