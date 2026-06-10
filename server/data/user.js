const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:string,
        required:true
    },
    email:{
        type:string,
        required:true,
        unique:true
    },
    password:{
        type:string,
        required:true,
        unique:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
});
// Compile the schema into a model
const user = mongoose.model("User",userSchema);
module.exports= user;