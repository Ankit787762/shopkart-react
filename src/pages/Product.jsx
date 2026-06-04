import { useNavigate } from "react-router-dom";
import Navbarpage from "../components/navbar";


function Productpage() {

const navigate =useNavigate();

return(
    <div>
        <Navbarpage/>
        <div className="flex flex-col gap-5">
        <div className="mt-5 flex justify-center items-center">
        <input className="w-100 px-4 py-2 border border-gray-300 rounded-lg text-black outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="Search products..."/></div>
        
         <div className="flex justify-center items-center gap-20 mt-20">

            <div className="w-72 border rounded-xl p-4 flex flex-col items-center shadow-lg">
                <img  className="w-40 h-40 object-contain"src="https://png.pngtree.com/png-clipart/20250523/original/pngtree-modern-laptop-computer-with-screen-open-technology-digital-device-png-image_21059292.png" alt="" />
                 <h2 className="text-xl font-bold mt-4">Laptop</h2>
                <p className="text-gray-600 mt-2">₹50000</p>
               <div className="flex justify-around gap-5">
                <button onClick={()=>navigate("/Productdetailpage")} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"> View Details </button>
                <button onClick={()=>navigate("/Cartpage")} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"> Add to Cart </button>
                </div>
                </div>

            <div className="w-72 border rounded-xl p-4 flex flex-col items-center shadow-lg">
                <img className="w-40 h-40 object-contain" src="https://purepng.com/public/uploads/large/purepng.com-phone-in-handphone-in-handhandheldpersonal-computermobile-1701528365413xgxux.png" alt="" />
                 <h2 className="text-xl font-bold mt-4">Laptop</h2>
                <p className="text-gray-600 mt-2">₹50000</p>
                <div className="flex justify-around gap-5">
                <button onClick={()=>navigate("/Productdetailpage")} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"> View Details </button>
                <button onClick={()=>navigate("/Cartpage")} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"> Add to Cart </button>
                </div>
            </div>

            <div className="w-72 border rounded-xl p-4 flex flex-col items-center shadow-lg">
                <img className="w-40 h-40 object-contain" src="https://png.pngtree.com/png-vector/20250703/ourmid/pngtree-black-headphones-sleek-3d-render-png-image_16600605.webp" alt="" />
                 <h2 className="text-xl font-bold mt-4">Laptop</h2>
                <p className="text-gray-600 mt-2">₹50000</p>
                <div className="flex justify-around gap-5">
                <button onClick={()=>navigate("/Productdetailpage")} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"> View Details </button>
                <button onClick={()=>navigate("/cartpage")} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"> Add to Cart </button>
                </div>
            </div>
        </div>

        </div>
    </div>
)
}
export default Productpage;