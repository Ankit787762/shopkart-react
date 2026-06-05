import Navbarpage from "../components/navbar";
function Aboutpage(){
 return (
    <div>
        <Navbarpage/>
         <div className="min-h-screen bg-gray-100 py-12 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-800">
              About ShopKart
            </h1>

            <p className="mt-4 text-lg text-gray-600">
              Your trusted destination for quality electronics at affordable prices.
            </p>
          </div>

          {/* About Section */}
          <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-semibold text-gray-800">
              Who We Are
            </h2>

            <p className="mt-4 text-gray-600 leading-7">
              ShopKart is an online electronics store dedicated to providing
              high-quality gadgets, laptops, smartphones, headphones, and
              accessories. Our goal is to make technology accessible to
              everyone by offering premium products at competitive prices.
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <h3 className="text-xl font-semibold">🚚 Fast Delivery</h3>
              <p className="mt-3 text-gray-600">
                Quick and reliable delivery across the country.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <h3 className="text-xl font-semibold">🔒 Secure Payments</h3>
              <p className="mt-3 text-gray-600">
                Safe and secure payment methods for every purchase.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <h3 className="text-xl font-semibold">⭐ Quality Products</h3>
              <p className="mt-3 text-gray-600">
                Carefully selected products from trusted brands.
              </p>
            </div>

          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">

            <div className="bg-blue-600 text-white p-6 rounded-xl text-center">
              <h2 className="text-4xl font-bold">1000+</h2>
              <p>Happy Customers</p>
            </div>

            <div className="bg-blue-600 text-white p-6 rounded-xl text-center">
              <h2 className="text-4xl font-bold">500+</h2>
              <p>Products Available</p>
            </div>

            <div className="bg-blue-600 text-white p-6 rounded-xl text-center">
              <h2 className="text-4xl font-bold">24/7</h2>
              <p>Customer Support</p>
            </div>

          </div>

        </div>
      </div>
    </div>
 )
}

export default Aboutpage;