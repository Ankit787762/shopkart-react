import Navbarpage from "../../components/navbar";

function Manageproducts() {
    return (
        <div className="min-h-screen bg-gray-100">


            <Navbarpage />

            <div className="p-6">

                <h1 className="text-2xl font-bold mb-6 text-gray-800">
                    Manage Products
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

                    {/* Single Product Card */}
                    <div className="bg-white shadow-md rounded-xl p-4 flex flex-col gap-3">
                      
                        <img src=" " alt="product image" className="h-40 w-full object-cover rounded-lg" />
                        <h2 className="font-bold text-lg text-gray-800"> Product Name </h2>
                        <p className="text-gray-600"> Product Title </p>

                        <p className="text-blue-600 font-bold">  ₹999 </p>

                        <div className="flex gap-3 mt-2">
                            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-lg transition">  Edit   </button>
                            <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg transition">    Delete   </button>
                        </div>
                    </div>
                    
                </div>
            </div>

        </div>
    );
}

export default Manageproducts;
