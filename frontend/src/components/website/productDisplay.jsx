import React, { useEffect, useState } from "react";
import axios from "axios";
import AllProducts from "./AllProducts";

function ProductDisplay() {
  const [getProduct, setGetProduct] = useState([]);
  const [category, setCategory] = useState("");
  const handleReadProductData = () => {
    axios
      .post("http://localhost:4002/read/product", {
        category: category,
      })
      .then((res) => {
        setGetProduct(res.data);
        console.log(category);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    handleReadProductData();
  }, [category]);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-gray-700 mb-6 text-center">
        Filter the Product
      </h1>

      <form className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-wrap justify-center gap-6 mb-6">
        <label className="flex items-center cursor-pointer text-lg">
          <input
            value="SmartPhone"
            checked={category === "SmartPhone"}
            onChange={(e) => setCategory(e.target.value)}
            type="radio"
            name="category"
            className="mr-2"
          />
          SmartPhone
        </label>

        <label className="flex items-center cursor-pointer text-lg">
          <input
            value="TV"
            checked={category === "TV"}
            onChange={(e) => setCategory(e.target.value)}
            type="radio"
            name="category"
            className="mr-2"
          />
          TV
        </label>

        <label className="flex items-center cursor-pointer text-lg">
          <input
            value="smartwatch"
            checked={category === "smartwatch"}
            onChange={(e) => setCategory(e.target.value)}
            type="radio"
            name="category"
            className="mr-2"
          />
          SmartWatch
        </label>

        <label className="flex items-center cursor-pointer text-lg">
          <input
            value="Laptops"
            checked={category === "Laptops"}
            onChange={(e) => setCategory(e.target.value)}
            type="radio"
            name="category"
            className="mr-2"
          />
          Laptops
        </label>
      </form>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {getProduct.length > 0 ? (
          getProduct.map((data) => (
            <AllProducts
              key={data._id}
              image={data.image}
              title={data.prName}
              price={data.price}
              description={data.description}
            />
          ))
        ) : (
          <p className="text-gray-500 text-lg col-span-3 text-center">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
}

export default ProductDisplay;
