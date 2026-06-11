const Cart =require('../data/cart');

const addtocart=async(req,res)=>{
 try {
    
const {productid,quantity} =req.body;
const userid = req.user.id
let cart = await Cart.findOne({user:userid});

if(!cart){
   const  newcart = new Cart({
        user :userid,
        items:[
            {
                product:productid,
                quantity
            }
        ]
    })

          await newcart.save();
            return res.status(201).json({
                message: "Cart created and product added",
            });
}

 const existingProduct= cart.items.find(p=>p.product.toString()===productid);
    if(existingProduct){
        existingProduct.quantity+=quantity;
    }
    else{
        cart.items.push({
            product:productid,
            quantity
        })
    }
       await  cart.save();
         res.status(200).json({
            message:"product added to cart"
            
        })

 } catch (error) {
    res.status(500).json({
        message:error.message
    })
 }
}
const getcart = async (req, res) => {
    try {
        const userid = req.user.id;

        const cart = await Cart.findOne({ user: userid });

        if (!cart) {
            return res.status(404).json({
                message: "cart is not found"
            });
        }

        res.status(200).json({
            message: "cart found",
            cart
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}
const updatecart = async (req, res) => {
    try {
        const { productid, quantity } = req.body;
        const userid = req.user.id;

        const cart = await Cart.findOne({ user: userid });

        if (!cart) {
            return res.status(404).json({
                message: "cart is not found"
            });
        }

        const existingProduct = cart.items.find(
            p => p.product.toString() === productid
        );

        if (!existingProduct) {
            return res.status(404).json({
                message: "Product not found in cart"
            });
        }

        existingProduct.quantity = quantity;

        await cart.save();

        res.status(200).json({
            message: "cart updated successfully",
            cart
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}
const removecart = async (req, res) => {
    try {
        const { productid } = req.body;
        const userid = req.user.id;

        const cart = await Cart.findOne({ user: userid });

        if (!cart) {
            return res.status(404).json({
                message: "user cart not found"
            });
        }

        const existingProduct = cart.items.find(
            p => p.product.toString() === productid
        );

        if (!existingProduct) {
            return res.status(404).json({
                message: "product not found in cart"
            });
        }

        cart.items = cart.items.filter(
            p => p.product.toString() !== productid
        );

        await cart.save();

        res.status(200).json({
            message: "Product removed from cart",
            cart
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports= {
    addtocart,
    getcart,
    updatecart,
    removecart
}