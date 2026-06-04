import Navbarpage from "../components/navbar";
function Cartpage(){
 return (
    <div>
        <Navbarpage/>
        <div>
            <h1 className=" ml-4 text-2xl font-bold">My Cart</h1>
            <div className=" border mt-10 flex justify-center items-center gap-100">
            <div className="w-40 h-40">
            <img src=" object-contain"src="https://png.pngtree.com/png-clipart/20250523/original/pngtree-modern-laptop-computer-with-screen-open-technology-digital-device-png-image_21059292.png" alt="product image" />
            </div>

            <div>
            <h2 className="text-lg font-semibold text-gray-800">Laptop</h2>
            <p className="text-green-600 font-bold">₹50,000</p>

             <div className="flex items-center gap-3 mt-2">
            <button className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">-</button>
            <span className="text-sm">1</span>
            <button className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">+</button>
             </div>

            </div>
            <button className="mt-4 bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-lg">delete</button>
            </div>
            
        </div>
    </div>
 )
}

export default Cartpage;