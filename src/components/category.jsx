function Category(){

     const categories = [
    {
      id: 1,
      name: "Smartphones",
      image: "/images/smart_phone_category.png",
    },
    {
      id: 2,
      name: "Laptops",
      image: "/images/Laptop_category.png",
    },
    {
      id: 3,
      name: "Smart Watches",
      image: "/images/smart_watch_category.webp",
    },
    {
      id: 4,
      name: "Accessories",
      image: "/images/accessories.jpg",
    },
  ];

    return (
        <div>
      <div className="py-20 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-12">
          Shop By Category
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
          {categories.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
            >
              <div className="h-52 flex items-center justify-center bg-gray-50">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain p-4"
                />
              </div>

              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold">
                  {item.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>

    )
}
export default Category;