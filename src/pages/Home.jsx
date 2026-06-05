import { useNavigate } from "react-router-dom";
import Navbarpage from "../components/navbar";


function HomePage(){

    const navigate = useNavigate();

 return(
<div className="min-h-screen flex flex-col">

  {/* Navbar */}
  <div className="shrink-0">
    <Navbarpage />
  </div>

  {/* Hero */}
  <div
  className="flex-1 bg-cover bg-center relative"
  style={{ backgroundImage: "url('/images/bg.webp')" }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Content */}
  <div className="relative z-10 flex items-center justify-center h-full px-4">
    <div className="max-w-3xl text-center text-white">

      <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-tight">
        Upgrade Your
        <span className="text-blue-400"> Tech Lifestyle</span>
      </h1>

      <p className="mt-6 text-lg md:text-xl text-gray-200">
        Discover premium electronics, gadgets and accessories
        at unbeatable prices.
      </p>

      <div className="mt-8 flex justify-center gap-4">
        <button onClick={() => navigate("/Productpage")} className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold transition duration-300 shadow-lg">Shop Now</button>
      </div>

    </div>
  </div>
</div>

</div>
 )}
 
export default HomePage;

