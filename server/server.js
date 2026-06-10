const express = require("express");
const products =require("./data/products");

const app= express();
app.use(express.json());

// get all products 
app.get('/api/products',(req,res)=>{
    res.json(products);
})

//get single product
app.get('/api/products/:id',(req,res)=>{
    const product_id = Number(req.params.id);
    const product = products.find(p=>p.id==product_id);
    if(!product){
        return res.status(404).json({
            message: "product is not found"
        })
    }
    res.json(product);
})

// add product
app.post('/api/products',(req,res)=>{
    // Destructure data from the request body
    const {title,price}=req.body;

    // add validation
    if(!title||!price){
        return res.status(400).json({
            message:"title and price are required"
        })
    }
    // create new product
    const newprodut={
        id: products.length+1,
        title,
        price, 
        }
        //push in products array
        products.push(newprodut);

        res.status(201).json({
            success:true,
            message:"product added successfully",
            product:newprodut
        })
})

// update product
app.put('/api/products/:id',(req,res)=>{
    const product_id = Number(req.params.id);
    const product = products.find(p=>p.id===product_id);
    if(!product){
        return res.status(404).json({
            message:"product is not found"
        })
      }
        const {title,price}=req.body;
        product.title=title,
        product.price=price

        res.json(product);
})

// delete product
app.delete('/api/products/:id',(req,res)=>{
     const product_id = Number(req.params.id);
    const product = products.find(p=>p.id===product_id);
    if(!product){
        return res.status(404).json({
            message:"product is not found"
        })
      }
      //remove product
    const index = products.findIndex(p=>p.id ===product_id);
    products.splice(index,1);

     res.json({
        success:true,
        message:"product deleted successfully"
    });
})


app.listen(5000,()=>{
    console.log("server is running on port 5000")
})