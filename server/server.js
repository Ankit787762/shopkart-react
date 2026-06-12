require("dotenv").config();

const connectDB = require('./config/db');
const express = require("express");
const productRoutes = require('./routes/productRoutes')
const userRoutes = require('./routes/userRoutes');
const cartRoutes =require('./routes/cartRoutes');

const app =express();
const cors =require('cors');
const path = require("path");

app.use(express.json());
app.use(cors({
    origin:"http://localhost:5173",
    credentials: true,
}))


// STATIC FILES (IMPORTANT)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use('/api/products',productRoutes)
app.use('/api/users',userRoutes)
app.use('/api/carts',cartRoutes)
// connect database
connectDB();

app.listen(5000,()=>{
    console.log("server is running on port 5000")
})