const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,

    },
    isAdmin:{
        type:Boolean,
        default:false
    }
});
// Compile the schema into a model
const User = mongoose.model("Usermodel",userSchema);
module.exports= User;