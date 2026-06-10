const express = require("express");
const productrouter = require('./routes/productRoutes')
const app =express();
app.use(express.json());

app.use('/api/products',productrouter)

app.listen(5000,()=>{
    console.log("server is running on port 5000")
})