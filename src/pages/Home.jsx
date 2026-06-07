import { useNavigate } from "react-router-dom";
import Navbarpage from "../components/navbar";

function HomePage() {
  const navigate = useNavigate();

     const categories = [
    {
      id: 1,
      name: "Smartphones",
      image: "/images/smart_phone_category.png",
    },
    {
      id: 2,
      name: "Laptops",
      image: "/images/Laptop_category.png",
    },
    {
      id: 3,
      name: "Smart Watches",
      image: "/images/smart_watch_category.webp",
    },
    {
      id: 4,
      name: "Accessories",
      image: "/images/accessories.jpg",
    },
  ];

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

      {/* Navbar */}
      <Navbarpage />

      {/* Hero Section */}
      <section
        className="min-h-screen  bg-cover bg-center relative"
        style={{ backgroundImage: "url('/images/bg.webp')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <div className="max-w-3xl mt-20 text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold">
              Upgrade Your
              <span className="text-blue-400"> Tech Lifestyle</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-200">
              Discover premium electronics, gadgets and accessories
              at unbeatable prices.
            </p>

            <button
              onClick={() => navigate("/Productpage")}
              className="mt-8 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold"
            >
              Shop Now
            </button>
          </div>
        </div>
      </section>

        {/* Categories Section */}
      <section className="py-20 bg-white">
        <h2 className="text-4xl font-bold text-center mb-12">
          Shop By Category
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
          {categories.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
            >
              <div className="h-52 flex items-center justify-center bg-gray-50">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain p-4"
                />
              </div>

              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold">
                  {item.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-100">
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

                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


    <section className="py-20 bg-white">
  <h2 className="text-4xl font-bold text-center mb-12">
    Why Choose Us
  </h2>

  <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 px-4">

    <div className="text-center">
      <div className="text-5xl mb-4">🚚</div>
      <h3 className="font-bold text-xl">Fast Delivery</h3>
      <p className="text-gray-500 mt-2">
        Quick and secure shipping across India.
      </p>
    </div>

    <div className="text-center">
      <div className="text-5xl mb-4">💳</div>
      <h3 className="font-bold text-xl">Secure Payments</h3>
      <p className="text-gray-500 mt-2">
        Multiple payment options with full security.
      </p>
    </div>

    <div className="text-center">
      <div className="text-5xl mb-4">⭐</div>
      <h3 className="font-bold text-xl">Premium Quality</h3>
      <p className="text-gray-500 mt-2">
        Genuine products from trusted brands.
      </p>
    </div>

    <div className="text-center">
      <div className="text-5xl mb-4">🎧</div>
      <h3 className="font-bold text-xl">24/7 Support</h3>
      <p className="text-gray-500 mt-2">
        Dedicated customer support anytime.
      </p>
    </div>

  </div>
</section>

      <footer className="bg-black text-white pt-16 pb-8">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid md:grid-cols-4 gap-10">

      <div>
        <h3 className="text-2xl font-bold text-blue-400">
          Tech Store
        </h3>
        <p className="mt-4 text-gray-400">
          Your one-stop destination for premium
          electronics, gadgets and accessories.
        </p>
      </div>

      <div>
        <h4 className="font-semibold text-lg mb-4">
          Quick Links
        </h4>

        <ul className="space-y-2 text-gray-400">
          <li>Home</li>
          <li>Products</li>
          <li>Categories</li>
          <li>Contact</li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold text-lg mb-4">
          Customer Service
        </h4>

        <ul className="space-y-2 text-gray-400">
          <li>Help Center</li>
          <li>Shipping</li>
          <li>Returns</li>
          <li>Track Order</li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold text-lg mb-4">
          Contact
        </h4>

        <ul className="space-y-2 text-gray-400">
          <li>support@techstore.com</li>
          <li>+91 98765 43210</li>
          <li>India</li>
        </ul>
      </div>

    </div>

    <hr className="border-gray-800 my-8" />

    <div className="text-center text-gray-500">
      © 2026 Tech Store. All Rights Reserved.
    </div>

  </div>
</footer>

    </div>
  );
}

export default HomePage;