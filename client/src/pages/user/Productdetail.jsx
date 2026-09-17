import { useParams } from "react-router-dom";
import Navbarpage from "../../components/navbar";
import { useEffect, useState } from "react";
import Api from "../../services/Api";

function Productdetailspage() {

    const { id } = useParams();
    const [product, setProduct] = useState("");

    useEffect(() => {

        async function getProducts() {
            try {
                const res = await Api.get(`/carts/getproduct/${id}`);
                setProduct(res.data);
            } catch (error) {
                console.log(error);
            }
        }

        getProducts();

    }, [id]);


    if (!product) {
        return <div>Loading....!</div>;
    }


    return (
        <div className="min-h-screen bg-gray-100">

            <Navbarpage />

            <div className="max-w-6xl mx-auto px-6 py-8">

                {/* Main Product Section */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200
                                overflow-hidden grid grid-cols-1 md:grid-cols-2">


                    {/* Product Image */}
                    <div className="bg-gray-50 min-h-[480px]
                                    flex items-center justify-center p-10">

                        <img
                            src={product.image}
                            alt={product.title}
                            className="max-h-[400px] max-w-full object-contain
                                       hover:scale-105 transition duration-300"
                        />

                    </div>


                    {/* Product Details */}
                    <div className="p-8 md:p-10">

                        <p className="text-blue-500 text-sm font-semibold mb-3">
                            PRODUCT DETAILS
                        </p>


                        <h1 className="text-3xl font-bold text-gray-800 leading-tight">
                            {product.title}
                        </h1>


                        {/* Rating */}
                        <div className="flex items-center gap-3 mt-4">

                            <span className="bg-green-600 text-white
                                             px-3 py-1 rounded-md text-sm font-semibold">
                                ★ 4.5
                            </span>

                            <span className="text-gray-500 text-sm">
                                120 Ratings & Reviews
                            </span>

                        </div>


                        {/* Price */}
                        <div className="mt-6">

                            <p className="text-3xl font-bold text-green-600">
                                ₹{product.price}
                            </p>

                            <p className="text-sm text-gray-500 mt-1">
                                Inclusive of all taxes
                            </p>

                        </div>


                        {/* Stock */}
                        <div className="mt-5 flex items-center gap-2">

                            <span className="w-3 h-3 bg-green-500 rounded-full"></span>

                            <span className="text-green-600 font-semibold">
                                In Stock
                            </span>

                        </div>


                        {/* Description */}
                        <div className="border-t border-gray-200 mt-6 pt-6">

                            <h2 className="text-lg font-semibold text-gray-800 mb-3">
                                About this product
                            </h2>

                            <p className="text-gray-600 leading-7">
                                {product.description}
                            </p>

                        </div>


                        {/* Service Features */}
                        <div className="grid grid-cols-3 gap-3 mt-7">

                            <div className="bg-gray-50 rounded-lg p-3 text-center">
                                <div className="text-blue-500 text-xl mb-1">
                                    🚚
                                </div>

                                <p className="text-xs font-semibold text-gray-700">
                                    Free Delivery
                                </p>
                            </div>


                            <div className="bg-gray-50 rounded-lg p-3 text-center">
                                <div className="text-blue-500 text-xl mb-1">
                                    ↻
                                </div>

                                <p className="text-xs font-semibold text-gray-700">
                                    7 Day Replacement
                                </p>
                            </div>


                            <div className="bg-gray-50 rounded-lg p-3 text-center">
                                <div className="text-blue-500 text-xl mb-1">
                                    🛡
                                </div>

                                <p className="text-xs font-semibold text-gray-700">
                                    1 Year Warranty
                                </p>
                            </div>

                        </div>

                    </div>

                </div>


                {/* Product Highlights */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200
                                mt-8 p-8">

                    <h2 className="text-2xl font-bold text-gray-800 mb-6">
                        Product Highlights
                    </h2>


                    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

                        <div className="border border-gray-200 rounded-xl p-5">
                            <p className="text-sm text-gray-500">
                                Category
                            </p>

                            <p className="font-semibold text-gray-800 mt-2">
                                {product.category || "Electronics"}
                            </p>
                        </div>


                        <div className="border border-gray-200 rounded-xl p-5">
                            <p className="text-sm text-gray-500">
                                Availability
                            </p>

                            <p className="font-semibold text-green-600 mt-2">
                                In Stock
                            </p>
                        </div>


                        <div className="border border-gray-200 rounded-xl p-5">
                            <p className="text-sm text-gray-500">
                                Rating
                            </p>

                            <p className="font-semibold text-gray-800 mt-2">
                                ★ 4.5 / 5
                            </p>
                        </div>


                        <div className="border border-gray-200 rounded-xl p-5">
                            <p className="text-sm text-gray-500">
                                Product Type
                            </p>

                            <p className="font-semibold text-gray-800 mt-2">
                                Electronics
                            </p>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Productdetailspage;