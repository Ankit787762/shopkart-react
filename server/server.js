require("dotenv").config();

const connectDB = require('./config/db');
const express = require("express");
const productroutes = require('./routes/productRoutes')
const app =express();
app.use(express.json());

app.use('/api/products',productroutes)
// connect database
connectDB();

app.listen(5000,()=>{
    console.log("server is running on port 5000")
})