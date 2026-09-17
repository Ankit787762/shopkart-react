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
 

return (
  <div className="min-h-screen bg-gray-100">
    <Navbarpage />

    <main className="max-w-7xl mx-auto px-5 py-6">

      {/* Search Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-7">

        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            All Products
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Find the perfect product for you
          </p>
        </div>

        <div className="relative w-full sm:w-96">
          <input
            onChange={(e) => setSearchdata(e.target.value)}
            value={searchdata}
            className="w-full bg-white px-4 py-3 pr-10 border border-gray-300 rounded-xl
            text-black outline-none transition
            focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            type="text"
            placeholder="Search products..."
          />

          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
            🔍
          </span>
        </div>

      </div>

      {/* Product Count */}
      <div className="mb-4">
        <p className="text-sm text-gray-500">
          {cards.length} products available
        </p>
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

        {cards
          .filter((card) =>
            card.name.toLowerCase().includes(searchdata.toLowerCase()) ||
            card.title.toLowerCase().includes(searchdata.toLowerCase())
          )
          .map((card) => {

            return (
              <div
                key={card._id}
                className="bg-white rounded-2xl border border-gray-200
                shadow-sm hover:shadow-xl hover:-translate-y-1
                transition-all duration-300 overflow-hidden flex flex-col"
              >

                {/* Image */}
                <div className="h-52 bg-gray-50 flex items-center justify-center overflow-hidden">

                  <img
                    src={
                      card.image.startsWith("http")
                        ? card.image
                        : `http://localhost:5000/uploads/${card.image}`
                    }
                    alt={card.name}
                    className="h-full w-full object-contain p-5
                    hover:scale-110 transition-transform duration-300"
                  />

                </div>

                {/* Details */}
                <div className="p-5 flex flex-col flex-1">

                  <h2 className="text-base font-bold text-gray-800 line-clamp-1">
                    {card.name}
                  </h2>

                  <p className="text-sm text-gray-500 mt-2 line-clamp-2 min-h-10">
                    {card.title}
                  </p>

                  <p className="text-xl font-bold text-blue-600 mt-4">
                    ₹{card.price}
                  </p>

                  {/* Buttons */}
                  <div className="flex gap-3 mt-auto pt-5">

                    <button
                      onClick={() =>
                        navigate(`/Productdetailpage/${card._id}`)
                      }
                      className="flex-1 bg-blue-500 hover:bg-blue-600
                      active:scale-95 text-white py-2.5 rounded-lg
                      text-sm font-medium transition-all"
                    >
                      View
                    </button>

                    <button
                      onClick={() => addToCart(card)}
                      className="flex-1 bg-green-500 hover:bg-green-600
                      active:scale-95 text-white py-2.5 rounded-lg
                      text-sm font-medium transition-all"
                    >
                      Cart
                    </button>

                  </div>

                </div>

              </div>
            );
          })}

      </div>

    </main>
  </div>
);
}
export default Productpage;