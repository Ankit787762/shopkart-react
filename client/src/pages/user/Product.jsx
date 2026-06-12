import { useNavigate } from "react-router-dom";
import Navbarpage from "../../components/navbar";
import { useEffect, useState } from "react";

import Api from '../../services/Api';

function Productpage() {


const navigate =useNavigate();
const [cards,setCards]=useState([]);
const [searchdata,setSearchdata]=useState("");

useEffect(() => {
  async function getProducts() {
    try {
      const response = await Api.get("/products");
      console.log("API RESPONSE:", response.data);

      setCards(response.data); 
    } catch (error) {
      console.log(error);
    }
  }

  getProducts();
}, []);


const addToCart = async (product) => {
  try {
    await Api.post("/carts/addtocart", {
      productid: product._id,
      quantity: 1,
    });

    navigate("/Cartpage");
  } catch (error) {
    console.log(error);
  }
};
 

return(
    <div className="bg-gray-100">
        <Navbarpage/>
        <div className=" flex flex-col gap-5">
        <div className="mt-5 flex justify-center items-center">
        <input onChange={(e)=>setSearchdata(e.target.value)} className="w-100 px-4 py-2 border border-gray-700 rounded-lg text-black outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="Search products..."/></div>
        
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
      {cards.map((card) => {
    return (
      <div
        key={card._id}
        className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col"
      >
        {/* IMAGE SECTION */}
        <div className="h-48 w-full bg-gray-50 flex items-center justify-center">
          <img
            src={
              card.image.startsWith("http")
                ? card.image
                : `http://localhost:5000/uploads/${card.image}`
            }
            alt={card.title}
            className="h-full object-contain hover:scale-105 transition duration-300"
          />
        </div>

        <div className="p-4 flex flex-col flex-1">
           <h2 className="text-sm font-bold text-gray-800">
             {card.name}
           </h2>

           <p className="text-xs text-gray-500 mt-1 line-clamp-2">
             {card.title}
           </p>

           <p className="text-blue-600 font-bold mt-3 text-lg">
             ₹{card.price}
            </p>

           {/* button */}
            <div className="flex gap-3 mt-auto pt-4">
             <button
                onClick={() => navigate(`/Productdetailpage/${card._id}`)}
               className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg text-sm transition"
             >
              View
              </button>

             <button
               onClick={() => addToCart(card)}
               className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg text-sm transition"
              >
               Cart
                </button>
                 </div>
              </div>
            </div>
        );
     })}
    </div>

        </div>
    </div>
)
}
export default Productpage;