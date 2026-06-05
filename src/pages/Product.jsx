import { useNavigate } from "react-router-dom";
import Navbarpage from "../components/navbar";
import { useEffect, useState } from "react";


function Productpage() {

const navigate =useNavigate();
const [cards,setCards]=useState([]);
const [searchdata,setSearchdata]=useState("");

useEffect(()=>{
    async function getcard() {
    const response = await fetch('https://fakestoreapi.com/products/category/electronics') 
    const data  = await response.json();
    setCards(data);
    }
    getcard();
},[]);

const addToCart = (product) => {
  const oldCart = JSON.parse(localStorage.getItem("cart")) || [];

  localStorage.setItem("cart", JSON.stringify([...oldCart, product]));
  navigate("/Cartpage"); 
};
 

return(
    <div className="bg-gray-100">
        <Navbarpage/>
        <div className=" flex flex-col gap-5">
        <div className="mt-5 flex justify-center items-center">
        <input onChange={(e)=>setSearchdata(e.target.value)} className="w-100 px-4 py-2 border border-gray-300 rounded-lg text-black outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="Search products..."/></div>
        
         <div className=" flex flex-wrap justify-center items-center gap-10 mt-20">

        {cards.map((card)=>{
         return(
         <div key={card.id} className="w-72 h-96 border rounded-xl p-4 flex flex-col items-center shadow-lg">
            <img className="w-40 h-40 object-contain" src={card.image} alt={card.title} />
            <div className="text-sm font-bold mt-4 h-16 flex items-center justify-center text-center ">{card.title}</div>
            <div className="text-m font-bold mt-4 text-center">Price: ${card.price}</div>
           <div className="flex justify-around gap-5">
          <button onClick={()=>navigate(`/Productdetailpage/${card.id}`)} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"> View Details </button>
          <button onClick={() => addToCart(card)} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"> Add to Cart </button>
         </div>
           </div>
             )
            })}
               
        </div>

        </div>
    </div>
)
}
export default Productpage;