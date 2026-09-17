import Navbarpage from "../../components/navbar";
import { useEffect, useState } from "react";
import Api from "../../services/Api";

function Cartpage() {

  const [card, setCard] = useState([]);

  useEffect(() => {
    async function getcard() {
      try {
        const res = await Api.get("/carts/getcart");
        setCard(res.data.cart.items);
      } catch (error) {
        console.log(error);
      }
    }

    getcard();
  }, []);


  const removeItem = async (item) => {
    try {

      await Api.delete("/carts/removecart", {
        data: {
          productid: item.product._id
        }
      });

      const res = await Api.get("/carts/getcart");
      setCard(res.data.cart.items);

    } catch (error) {
      console.log(error);
    }
  };


  const increase = async (item) => {
    try {

      await Api.put("/carts/updatecart", {
        productid: item.product._id,
        quantity: item.quantity + 1
      });

      const res = await Api.get("/carts/getcart");
      setCard(res.data.cart.items);

    } catch (error) {
      console.log(error);
    }
  };


  const decrease = async (item) => {
    try {

      if (item.quantity <= 1) {
        return;
      }

      await Api.put("/carts/updatecart", {
        productid: item.product._id,
        quantity: item.quantity - 1
      });

      const res = await Api.get("/carts/getcart");
      setCard(res.data.cart.items);

    } catch (error) {
      console.log(error);
    }
  };


  // Calculate total
  let totalitem = 0;
  let totalprice = 0;

  card.forEach((item) => {

    if (!item.product) return;

    totalitem += item.quantity;
    totalprice += item.product.price * item.quantity;

  });


  return (
    <div className="min-h-screen bg-gray-100">

      <Navbarpage />

      <div className="max-w-6xl mx-auto px-6 py-8">

        {/* Page Heading */}
        <div className="mb-8">

          <h1 className="text-3xl font-bold text-gray-800">
            My Cart
          </h1>

          <p className="text-gray-500 mt-1">
            {totalitem} {totalitem === 1 ? "item" : "items"} in your cart
          </p>

        </div>


        {/* Empty Cart */}
        {card.length === 0 ? (

          <div className="bg-white rounded-2xl border border-gray-200
                          shadow-sm p-12 text-center">

            <div className="text-6xl mb-5">
              🛒
            </div>

            <h2 className="text-2xl font-bold text-gray-800">
              Your cart is empty
            </h2>

            <p className="text-gray-500 mt-2">
              Looks like you haven't added anything to your cart yet.
            </p>

          </div>

        ) : (

          /* Cart + Summary */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">


            {/* LEFT - Cart Items */}
            <div className="lg:col-span-2 space-y-5">

              {card.map((item, index) => {

                if (!item.product) return null;

                return (

                  <div
                    key={index}
                    className="bg-white rounded-2xl border border-gray-200
                               shadow-sm p-5 flex flex-col sm:flex-row
                               gap-6"
                  >

                    {/* Product Image */}
                    <div
                      className="w-full sm:w-36 h-36 shrink-0
                                 bg-gray-50 rounded-xl
                                 flex items-center justify-center"
                    >

                      <img
                        src={item.product.image}
                        alt={item.product.title}
                        className="w-full h-full object-contain p-3"
                      />

                    </div>


                    {/* Product Information */}
                    <div className="flex-1">

                      <h2
                        className="text-lg font-semibold text-gray-800
                                   leading-6"
                      >
                        {item.product.title}
                      </h2>


                      {/* Price */}
                      <p className="text-xl font-bold text-green-600 mt-3">
                        ₹{item.product.price}
                      </p>


                      {/* Quantity */}
                      <div className="flex items-center gap-3 mt-5">

                        <span className="text-sm text-gray-500">
                          Quantity:
                        </span>

                        <div
                          className="flex items-center border
                                     border-gray-300 rounded-lg overflow-hidden"
                        >

                          <button
                            onClick={() => decrease(item)}
                            className="w-9 h-9 flex items-center justify-center
                                       text-blue-500 font-bold text-lg
                                       hover:bg-blue-50 transition"
                          >
                            −
                          </button>

                          <span
                            className="w-10 h-9 flex items-center
                                       justify-center border-x
                                       border-gray-300 font-semibold
                                       text-gray-800"
                          >
                            {item.quantity}
                          </span>

                          <button
                            onClick={() => increase(item)}
                            className="w-9 h-9 flex items-center justify-center
                                       text-blue-500 font-bold text-lg
                                       hover:bg-blue-50 transition"
                          >
                            +
                          </button>

                        </div>

                      </div>


                      {/* Delete */}
                      <button
                        onClick={() => removeItem(item)}
                        className="mt-4 text-sm font-medium
                                   text-red-500 hover:text-red-600
                                   transition"
                      >
                        Remove item
                      </button>

                    </div>


                    {/* Item Total */}
                    <div
                      className="sm:text-right flex sm:block
                                 items-center justify-between"
                    >

                      <p className="text-sm text-gray-500">
                        Item Total
                      </p>

                      <p className="text-lg font-bold text-gray-800 mt-1">
                        ₹{item.product.price * item.quantity}
                      </p>

                    </div>

                  </div>

                );

              })}

            </div>


            {/* RIGHT - Order Summary */}
            <div>

              <div
                className="bg-white rounded-2xl border border-gray-200
                           shadow-sm p-6 sticky top-6"
              >

                <h2 className="text-xl font-bold text-gray-800 mb-6">
                  Order Summary
                </h2>


                {/* Items */}
                <div className="flex justify-between text-gray-600 mb-4">

                  <span>
                    Total Items
                  </span>

                  <span className="font-medium text-gray-800">
                    {totalitem}
                  </span>

                </div>


                {/* Subtotal */}
                <div className="flex justify-between text-gray-600 mb-4">

                  <span>
                    Subtotal
                  </span>

                  <span>
                    ₹{totalprice}
                  </span>

                </div>


                {/* Delivery */}
                <div className="flex justify-between text-gray-600 mb-4">

                  <span>
                    Delivery
                  </span>

                  <span className="text-green-600 font-medium">
                    FREE
                  </span>

                </div>


                <div className="border-t border-gray-200 my-5"></div>


                {/* Total */}
                <div className="flex justify-between items-center">

                  <span className="text-lg font-semibold text-gray-800">
                    Total
                  </span>

                  <span className="text-2xl font-bold text-green-600">
                    ₹{totalprice}
                  </span>

                </div>


                {/* Checkout */}
                <button
                  className="w-full mt-6 bg-blue-500
                             hover:bg-blue-600 text-white
                             font-semibold py-3 rounded-lg
                             transition duration-200"
                >
                  Proceed to Checkout
                </button>


                {/* Security / Delivery Info */}
                <div className="mt-5 pt-5 border-t border-gray-200">

                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <span>✓</span>
                    Secure checkout
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <span>✓</span>
                    Free delivery available
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span>✓</span>
                    Easy returns
                  </div>

                </div>

              </div>

            </div>

          </div>

        )}

      </div>

    </div>
  );
}

export default Cartpage;