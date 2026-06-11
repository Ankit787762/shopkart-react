import Navbarpage from "../../components/navbar";

function Addproduct() {
    return (
        <div className="min-h-screen bg-gray-100">

            {/* Navbar */}
            <Navbarpage />

            {/* Center Form */}
            <div className="flex justify-center items-center p-6">

                <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md flex flex-col gap-5">

                    <h1 className="text-2xl font-bold text-gray-800 text-center">
                        Add Product
                    </h1>

                    {/* Image URL */}
                    <div className="flex flex-col gap-1">
                        <label className="text-gray-600 font-medium">Image URL</label>
                        <input
                            type="text"
                            placeholder="Enter image URL"
                            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Name */}
                    <div className="flex flex-col gap-1">
                        <label className="text-gray-600 font-medium">Name</label>
                        <input
                            type="text"
                            placeholder="Enter product name"
                            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Title */}
                    <div className="flex flex-col gap-1">
                        <label className="text-gray-600 font-medium">Title</label>
                        <input
                            type="text"
                            placeholder="Enter title"
                            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Price */}
                    <div className="flex flex-col gap-1">
                        <label className="text-gray-600 font-medium">Price</label>
                        <input
                            type="number"
                            placeholder="Enter product price"
                            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Button */}
                    <button className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                        Add Product
                    </button>

                </div>
            </div>

        </div>
    );
}

export default Addproduct;