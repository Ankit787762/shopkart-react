import { useNavigate } from "react-router-dom";
import Navbarpage from "../../components/navbar";

function Adminhome() {

    const navigate =useNavigate();

    return (
       <div className="min-h-screen bg-gray-100">
            <Navbarpage />

            <div className="p-6 flex flex-col gap-6">

                <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>

                {/*  User Details */}
                <div className="bg-white p-6 rounded-xl shadow-md flex flex-col gap-2">
                    <h2 className="text-lg font-semibold text-gray-700">Admin Profile</h2>

                    <p className="text-gray-600"> <span className="font-semibold">Name:</span> John Doe</p>

                    <p className="text-gray-600"> <span className="font-semibold">Email:</span> admin@example.com</p>
                </div>

                {/* Card */}
                <div className="bg-white p-6 rounded-xl shadow-md flex flex-col gap-4">

                    <h2 className="text-lg font-semibold text-gray-700">Total Products </h2>
                    <p className="text-3xl font-bold text-blue-600">0</p>

                    <div className="flex gap-4 mt-4">
                        <button onClick={()=>navigate('/admin/Addproduct')} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Add Product</button>
                        <button onClick={()=>navigate('/admin/Manageproduct')} className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition">  Manage Products</button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Adminhome;