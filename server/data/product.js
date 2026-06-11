const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    image:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
})

const Products = mongoose.model("Productmodel",userSchema);
module.exports=Products;