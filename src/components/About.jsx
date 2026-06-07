function About(){
    return (
        <div>
    <div className="py-20 bg-white">
  <h2 className="text-4xl font-bold text-center mb-12">
    Why Choose Us
  </h2>

  <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 px-4">

    <div className="text-center">
      <div className="text-5xl mb-4">🚚</div>
      <h3 className="font-bold text-xl">Fast Delivery</h3>
      <p className="text-gray-500 mt-2">
        Quick and secure shipping across India.
      </p>
    </div>

    <div className="text-center">
      <div className="text-5xl mb-4">💳</div>
      <h3 className="font-bold text-xl">Secure Payments</h3>
      <p className="text-gray-500 mt-2">
        Multiple payment options with full security.
      </p>
    </div>

    <div className="text-center">
      <div className="text-5xl mb-4">⭐</div>
      <h3 className="font-bold text-xl">Premium Quality</h3>
      <p className="text-gray-500 mt-2">
        Genuine products from trusted brands.
      </p>
    </div>

    <div className="text-center">
      <div className="text-5xl mb-4">🎧</div>
      <h3 className="font-bold text-xl">24/7 Support</h3>
      <p className="text-gray-500 mt-2">
        Dedicated customer support anytime.
      </p>
    </div>

  </div>
</div>
        </div>
    )
}
export default About;