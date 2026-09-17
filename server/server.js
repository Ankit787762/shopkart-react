require("dotenv").config();

const connectDB = require('./config/db');
const express = require("express");
const productRoutes = require('./routes/productRoutes')
const userRoutes = require('./routes/userRoutes');
const cartRoutes =require('./routes/cartRoutes');

const cookieParser = require("cookie-parser");


const app =express();
const cors =require('cors');
const path = require("path");

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    // origin:"https://shopkart-react-liard.vercel.app",
     origin:"http://localhost:5173",
    credentials: true,
}))


// STATIC FILES (IMPORTANT)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use('/products',productRoutes)
app.use('/users',userRoutes)
app.use('/carts',cartRoutes)
// connect database
connectDB();

app.listen(5000,()=>{
    console.log("server is running on port 5000")
})