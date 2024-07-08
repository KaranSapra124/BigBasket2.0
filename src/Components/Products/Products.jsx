import React, { useEffect, useState } from "react";
import fetchData from "../utils/fetchProducts";
import { Card } from "antd";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const str = "⭐";

  const handleOpenProduct = (item) => {
    navigate("/prodInfo", {
      state: item,
    });
  };
  useEffect(() => {
    const getData = async (url) => {
      const data = await fetchData(url);
      setProducts(data?.products);
    };
    getData("https://dummyjson.com/products?limit=50&skip=10");
  }, []);

  return (
    <div className="flex flex-wrap justify-center items-center bg-gray-200">
      {products.map((elem) => {
        return (
          <Card
            onClick={() => handleOpenProduct(elem)}
            className="border text-center w-fit flex justify-center m-2 items-center shadow hover:scale-105 duration-1000"
          >
            <img src={elem.thumbnail} alt="" />
            <h3 className="text-xl">{elem.title}</h3>
            <p className="flex items-center justify-center text-xl text-green-500">
              <FaIndianRupeeSign />
              {Math.round(elem.price) * 80}
            </p>
            <div>{str.repeat(elem.rating)}</div>
            <button className="bg-blue-500 p-4 text-lg rounded text-white mt-2">
              Add To Cart
            </button>
          </Card>
        );
      })}
    </div>
  );
};

export default Products;
