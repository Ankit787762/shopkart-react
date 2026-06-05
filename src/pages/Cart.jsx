import { useParams } from "react-router-dom";
import Navbarpage from "../components/navbar";
import { useEffect, useState } from "react";



function Cartpage(){

const [card,setCard] =useState([]);

useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("cart")) || [];
    setCard(saved);
  }, []);

    const removeItem = (index) => {
    const updated = card.filter((_, i) => i !== index);
    setCard(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

 return (
    <div>
        <Navbarpage/>
        <div className="p-6">
         <h1 className="text-2xl font-bold mb-6">My Cart</h1>

        {card.length===0? <h1>no card in cart</h1>:
        card.map((item,index)=>{
        return(
        <div key={index} className="border rounded-xl p-4 flex items-center gap-6 shadow-sm">
    
        <div className="w-32 h-32 shrink-0">
        <img src={item.image} alt="product image"className="w-full h-full object-contain"/>
       </div>

      {/* Product Details */}
      <div className="flex-1">
      <h2 className="text-lg font-semibold text-gray-800"> {item.title}</h2>

      <p className="text-green-600 font-bold mt-1">${item.price}</p>

      <div className="flex items-center gap-3 mt-3">
        <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">-</button>
        <span className="text-sm font-medium">1</span>
        <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">+</button>
        </div>
       </div>

       <button onClick={()=>removeItem(index)} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition">Delete</button></div>
            )
        })}
  
 </div>
    </div>
 )
}

export default Cartpage;