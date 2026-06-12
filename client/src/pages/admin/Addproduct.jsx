import { useState } from "react";
import Navbarpage from "../../components/navbar";
import Api from "../../services/Api";

function Addproduct() {

    const [image,setImage] =useState(null);
    const [name,setName] =useState("");
    const [title,setTitle] =useState("");
    const [price,setPrice] = useState("");

    const handleSubmit = async () => {
     try {
        const formData = new FormData();

        formData.append("image", image);
        formData.append("name", name);
        formData.append("title", title);
        formData.append("price", price);

        const res = await Api.post("/products/upload", formData);

        console.log(res.data);
        alert("Product added");

      } catch (error) {
         console.log(error);
      }
   };

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
                        type="file"
                        accept="image/*"
                        className="border border-gray-300 rounded-lg p-2"
                        onChange={(e) => setImage(e.target.files[0])}
                        />
                    </div>

                    {/* Name */}
                    <div className="flex flex-col gap-1">
                        <label className="text-gray-600 font-medium">Name</label>
                        <input onChange={(e)=>setName(e.target.value)}
                            type="text"
                            placeholder="Enter product name"
                            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Title */}
                    <div className="flex flex-col gap-1">
                        <label className="text-gray-600 font-medium">Title</label>
                        <input onChange={(e)=>setTitle(e.target.value)}
                            type="text"
                            placeholder="Enter title"
                            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Price */}
                    <div className="flex flex-col gap-1">
                        <label className="text-gray-600 font-medium">Price</label>
                        <input onChange={(e)=>setPrice(e.target.value)}
                            type="number"
                            placeholder="Enter product price"
                            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Button */}
                    <button onClick={handleSubmit} className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                        Add Product
                    </button>

                </div>
            </div>

        </div>
    );
}

export default Addproduct;