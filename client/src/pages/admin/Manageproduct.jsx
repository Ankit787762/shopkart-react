import { useState } from "react";
import Navbarpage from "../../components/navbar";
import { useEffect } from "react";
import Api from "../../services/Api";


function Manageproducts() {
    
    const [cards,setcards] = useState([]);

    useEffect(()=>{
        async function getProducts(){
            try {
                const res = await Api.get('/products');
                console.log("API RESPONSE:", res.data);
                setcards(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        getProducts();
    },[]);

   const deleteProduct = async (id) => {
    try {
     await Api.delete(`/products/${id}`);

     // remove from UI instantly
      setcards((prev) => prev.filter((item) => item._id !== id));

     } catch (error) {
     console.log(error);
     }
    };

    return (

        <div className="min-h-screen bg-gray-100">

            <Navbarpage />
            <div className="p-6">

            <h1 className="text-2xl font-bold mb-6 text-gray-800">
              Manage Products
              </h1>

       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {cards.map((card) => {
            return (
              <div
             key={card._id}
             className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-4 flex flex-col"  >
            {/* IMAGE */}
             <div className="w-full h-48 flex items-center justify-center bg-gray-100 rounded-xl overflow-hidden">
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

           <h2 className="text-sm font-bold text-gray-900 mt-4"> {card.name} </h2>
           <p className="text-xs text-gray-600 mt-1 line-clamp-2">{card.title}</p>

          <p className="text-blue-600 font-bold mt-2"> ₹{card.price}</p>

           <div className="flex gap-3 mt-auto pt-4">
            <button
            onClick={() => deleteProduct(card._id)}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition" >
            Delete
           </button>

          {/*
          <button className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg">
            Edit
          </button>
          */}
           </div>
         </div>
         );
        })}
       </div>
      </div>
     </div>
    );
}

export default Manageproducts;
