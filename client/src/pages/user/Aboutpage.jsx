import Navbarpage from "../../components/navbar";
import Footer from "../../components/Footer";

function AboutPage() {
  return (
    <div>
      <Navbarpage />

      <div className="min-h-screen bg-gray-100 py-12 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-800">
              About ShopKart
            </h1>

            <p className="mt-4 text-lg text-gray-600">
              Your trusted destination for premium electronics, gadgets,
              and accessories at affordable prices.
            </p>
          </div>

          {/* Who We Are */}
          <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-semibold text-gray-800">
              Who We Are
            </h2>

            <p className="mt-4 text-gray-600 leading-7">
              ShopKart is a modern online electronics store dedicated to
              bringing the latest technology products to customers across
              India. From smartphones and laptops to smart watches and
              accessories, we offer carefully selected products from
              trusted brands.
            </p>

            <p className="mt-4 text-gray-600 leading-7">
              Our mission is to make technology accessible to everyone by
              providing quality products, competitive prices, and
              exceptional customer service.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-800">
                Our Mission
              </h2>

              <p className="mt-4 text-gray-600 leading-7">
                To simplify online electronics shopping by offering
                genuine products, secure transactions, fast delivery,
                and reliable customer support.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-800">
                Our Vision
              </h2>

              <p className="mt-4 text-gray-600 leading-7">
                To become one of India's most trusted online destinations
                for technology products by delivering outstanding value
                and customer satisfaction.
              </p>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mt-16">
            <h2 className="text-4xl font-bold text-center mb-12">
              Why Choose Us
            </h2>

            <div className="grid md:grid-cols-4 gap-8">

              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="text-5xl mb-4">🚚</div>
                <h3 className="font-bold text-xl">Fast Delivery</h3>
                <p className="text-gray-500 mt-3">
                  Quick and reliable delivery across India.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="text-5xl mb-4">💳</div>
                <h3 className="font-bold text-xl">Secure Payments</h3>
                <p className="text-gray-500 mt-3">
                  Safe and secure payment methods for every purchase.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="text-5xl mb-4">⭐</div>
                <h3 className="font-bold text-xl">
                  Premium Quality
                </h3>
                <p className="text-gray-500 mt-3">
                  Genuine products from trusted brands.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="text-5xl mb-4">🎧</div>
                <h3 className="font-bold text-xl">
                  24/7 Support
                </h3>
                <p className="text-gray-500 mt-3">
                  Dedicated support whenever you need help.
                </p>
              </div>

            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6 mt-16">

            <div className="bg-blue-600 text-white p-6 rounded-xl text-center">
              <h2 className="text-4xl font-bold">1000+</h2>
              <p className="mt-2">Happy Customers</p>
            </div>

            <div className="bg-blue-600 text-white p-6 rounded-xl text-center">
              <h2 className="text-4xl font-bold">500+</h2>
              <p className="mt-2">Products Available</p>
            </div>

            <div className="bg-blue-600 text-white p-6 rounded-xl text-center">
              <h2 className="text-4xl font-bold">50+</h2>
              <p className="mt-2">Trusted Brands</p>
            </div>

            <div className="bg-blue-600 text-white p-6 rounded-xl text-center">
              <h2 className="text-4xl font-bold">24/7</h2>
              <p className="mt-2">Customer Support</p>
            </div>

          </div>

          {/* Closing */}
          <div className="mt-16 bg-white rounded-xl shadow-lg p-8 text-center">
            <h2 className="text-3xl font-semibold text-gray-800">
              Why Customers Trust ShopKart
            </h2>

            <p className="mt-4 text-gray-600 leading-7">
              At ShopKart, customer satisfaction is our top priority.
              We continuously work to provide a seamless shopping
              experience through quality products, competitive pricing,
              fast delivery, and dedicated support. Whether you're
              upgrading your devices or exploring the latest gadgets,
              ShopKart is here to help you make the right choice.
            </p>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AboutPage;