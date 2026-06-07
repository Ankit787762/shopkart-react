import { useNavigate } from "react-router-dom";
import Navbarpage from "../components/navbar";
import Category from "../components/category";
import Featured from "../components/FeaturedProduct";
import About from "../components/About";
import Footer from "../components/Footer";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbarpage />

      {/* Hero Section */}
      <div
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
              onClick={() => navigate("/Loginpage")}
              className="mt-8 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold"
            >
              Shop Now
               </button>
              </div>
             </div>
          </div>
            <Category/>
            <Featured/>
            <About/>
            <Footer/>
        </div>
  );
}

export default HomePage;