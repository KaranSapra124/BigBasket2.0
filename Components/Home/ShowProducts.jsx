import React, { useEffect, useState } from "react";
import fetchData from "../utils/fetchProducts";
import { Card } from "antd";

const ShowProducts = () => {
  const [products, setProducts] = useState([]);
  const str = "⭐";

  useEffect(() => {
    const getData = async (url) => {
      const data = await fetchData(url);
      setProducts(data?.products);
    };
    getData("https://dummyjson.com/products");
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-6">
        Explore Some Of Our Cool Products!
      </h1>
      <div className="flex flex-wrap justify-center gap-4">
        {products?.map((elem, index) => {
          if (index < 4) {
            return (
              <Card
                key={elem.id}
                className="w-64 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h1 className="text-xl font-semibold mb-2">{elem.title}</h1>
                <img
                  src={elem.thumbnail}
                  alt={elem.title}
                  className="w-full h-48 object-cover mb-4"
                />
                <p className="text-lg font-bold text-green-600 mb-2">
                  ₹{Math.round(elem.price * 80)}
                </p>
                <div className="flex items-center">
                  {str.repeat(Math.round(elem.rating))}
                </div>
              </Card>
            );
          }
        })}
      </div>
    </div>
  );
};

export default ShowProducts;
