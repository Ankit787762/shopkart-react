const mongoose =require('mongoose')

const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.URI);
        console.log("mongodb is connect");
    } catch (error) {
        console.log("mongodb connection failed");
        console.log(error.message);
    }
}

module.exports =connectDB;