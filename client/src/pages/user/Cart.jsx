import { useParams } from "react-router-dom";
import Navbarpage from "../../components/navbar";
import { useEffect, useState } from "react";
import Api from "../../services/Api";


function Cartpage(){

const [card,setCard] =useState([]);


    useEffect(()=>{
    async function getcard(){
      try {
        const res = await Api.get('/carts/getcart');
        setCard(res.data.cart.items);
        
      } catch (error) {
        console.log(error);
      }
    }
    getcard();
  },[]);

const removeItem = async(item) => {
  try {

    await Api.delete("/carts/removecart", {
      data: {
        productid: item.product._id
      }
    });

    const res = await Api.get("/carts/getcart");
    setCard(res.data.cart.items);

  } catch (error) {
    console.log(error);
  }
};


const increase = async(item)=>{
  try {
    await Api.put("/carts/updatecart",{
      productid:item.product._id,
      quantity:item.quantity + 1
    });

    const res = await Api.get("/carts/getcart");
    setCard(res.data.cart.items);

  } catch(error){
    console.log(error);
  }
}
const decrease = async(item)=>{
  try {

    if(item.quantity <= 1){
      return;
    }

    await Api.put("/carts/updatecart",{
      productid:item.product._id,
      quantity:item.quantity - 1
    });

    const res = await Api.get("/carts/getcart");
    setCard(res.data.cart.items);

  } catch(error){
    console.log(error);
  }
}

let totalitem = 0;
let totalprice = 0;

card.forEach((item) => {
  if (!item.product) return;

  totalitem += item.quantity;
  totalprice += item.product.price * item.quantity;
});

 return (
    <div className="bg-gray-100">
        <Navbarpage/>
        <div className="p-6">
         <h1 className="text-2xl font-bold mb-6">My Cart</h1>

        {card.length===0? <h1>no card in cart</h1>:
        card.map((item,index)=>{
          if (!item.product) return null;
        return(
        <div key={index} className="border rounded-xl p-4 flex items-center gap-6 shadow-sm">
    
        <div className="w-32 h-32 shrink-0">
        <img src={item.product.image} alt="product image"className="w-full h-full object-contain"/>
       </div>

      {/* Product Details */}
      <div className="flex-1">
      <h2 className="text-lg font-semibold text-gray-800"> {item.product.title}</h2>

      <p className="text-green-600 font-bold mt-1">${item.product.price}</p>

      <div className="flex items-center gap-3 mt-3">
        <button onClick={()=>decrease(item)} className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">-</button>
        <span className="text-sm font-medium">{item.quantity}</span>
        <button onClick={() => increase(item)} className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">+</button>
        </div>
       </div>

       <button onClick={()=>removeItem(item)} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition">Delete</button></div>
            )
        })}
  
 </div>

       <div className="mt-6 border rounded-xl p-5 shadow-md bg-gray-50 w-72 ml-6">
       <p className="text-lg font-semibold">
        Total Items: {totalitem}
        </p>

        <p className="text-xl font-bold text-green-600 mt-2">
        Total Price: ${totalprice}
        </p>
        </div>
    </div>
 )
}

export default Cartpage;