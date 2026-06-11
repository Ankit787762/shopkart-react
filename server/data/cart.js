const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
   user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Usermodel",
    required:true
   },
   items:[
    {
        product:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"Productmodel",
            required:true
        },
        quantity:{
            type:Number,
            required:true,
            default:1
        }
    }
   ]
})
const Cart = mongoose.model("Cartmodel",userSchema);
module.exports = Cart;