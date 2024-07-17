import { Card } from "antd";
import React, { useEffect, useState } from "react";
import { FaIndianRupeeSign } from "react-icons/fa6";

const Cart = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("big_basket_cart")));
  }, []);
  return (
    <>
      <h1 className="text-center text-3xl font-semibold mt-2">
        Your Cart Items!
      </h1>
      <div className="flex justify-evenly flex-wrap">
        <div className="flex justify-center items-center flex-wrap">
          {cart.map((elem) => {
            return (
              <Card className="border  m-2 shadow-lg ">
                <img
                  className="hover:scale-105"
                  src={elem.image}
                  alt=""
                  srcset=""
                />
                <h1 className="text-xl">{elem.title}</h1>
                <div className="flex items-center text-blue-500 font-bold">
                  <FaIndianRupeeSign />
                  {Math.round(elem.price * 80)}
                </div>
              </Card>
            );
          })}
        </div>
        <div className="bg-gray-200 w-[20rem] h-[100%] p-5 rounded ">
          <h1 className="text-center text-xl ">Your Bill !</h1>
          <hr />
          <div className="flex justify-between">
            <h2>Your Total!!</h2>
            {cart.reduce((acc, currVal) => {
              return acc + Math.round(currVal.price * 80);
            }, 0)}
          </div>
          <div className="flex justify-between">
            <h3>Delivery Charges</h3>
            <span>
              {cart.reduce((acc, currVal) => {
                return acc + Math.round(currVal.price * 80);
              }, 0) < 100000
                ? 500
                : "FREE"}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
