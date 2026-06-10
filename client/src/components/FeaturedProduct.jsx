import { useNavigate } from "react-router-dom";

function Featured(){
     
    const navigate =useNavigate();

     const featuredProducts = [
  {
    id: 1,
    name: "RGB Mechanical Keyboard",
    image: "/images/keyboard.webp",
    price: "₹4,999",
    description: "Mechanical gaming keyboard with RGB lighting.",
  },
  {
    id: 2,
    name: "4K Smart LED TV",
    image: "/images/LED_TV.png",
    price: "₹39,999",
    description: "Ultra HD smart TV with vibrant display.",
  },
  {
    id: 3,
    name: "Wireless Headphones",
    image: "/images/headphone.jpg",
    price: "₹7,999",
    description: "Crystal-clear sound and noise cancellation.",
  },
  {
    id: 4,
    name: "Gaming Mouse",
    image: "/images/mouse.png",
    price: "₹2,499",
    description: "High-precision gaming mouse with RGB effects.",
  },
];

    return (
        <div>
            <div className="py-20 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-12">
          Featured Products
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <div className="h-64 flex items-center justify-center p-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold">
                  {product.name}
                </h3>

                <p className="text-gray-500 mt-2">
                  {product.description}
                </p>

                <div className="flex justify-between items-center mt-4">
                  <span className="text-blue-600 text-xl font-bold">
                    {product.price}
                  </span>

                  <button onClick={()=>navigate("/Loginpage")} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
        </div>
    )
}
export default Featured;