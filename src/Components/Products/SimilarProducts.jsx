import { Card } from "antd";
import React from "react";
import { FaIndianRupeeSign } from "react-icons/fa6";

const SimilarProducts = ({ similarProducts }) => {
  const str = "⭐";
  return (
    <>
      <h1 className="text-center text-2xl p-8 font-semibold max-[500px]:animate-pulse  ">
        Explore More Products!
      </h1>
      <div className="flex justify-evenly flex-wrap">
        {similarProducts?.map((elem) => {
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
    </>
  );
};

export default SimilarProducts;
