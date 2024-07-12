import { Carousel } from "antd";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Button, Modal } from "antd";
import { FaRupeeSign } from "react-icons/fa";
import SimilarProducts from "./SimilarProducts";
import { BiCartAdd } from "react-icons/bi";

const IndividualPage = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const location = useLocation();
  const { state } = location;
  const { item, products } = state;
  const {
    title,
    brand,
    images,
    description,
    price,
    rating,
    category,
    id,
    thumbnail,
  } = item;
  const str = "⭐";

  const handleAddToCart = (item) => {
    if (localStorage.getItem("big_basket_cart")) {
      //If Any Value Exists In Cart
      const parsedArr = JSON.parse(localStorage.getItem("big_basket_cart")); //Calling the existing data
      parsedArr.push(item); //Storing new data into the cart
      localStorage.setItem("big_basket_cart", JSON.stringify(parsedArr)); //Updating the localstorage with updated cart
    } else {
      //When their is nothing inside the cart
      localStorage.setItem("big_basket_cart", JSON.stringify([item]));
    }
  };

  useEffect(() => {
    setFilteredProducts(() => {
      return products.filter((elem) => {
        return elem.category === category && elem.id !== id;
      });
    });
  }, []);
  return (
    <>
      <div className="border m-5 p-2 rounded flex flex-col justify-center  ">
        <Carousel autoplay={1000} className="h-[20rem]" dots>
          {images?.map((elem) => {
            return (
              <img
                className="h-[20rem] w-full object-cover sm:w-[20rem] md:w-[20rem]"
                src={elem}
                alt="carousel-image"
              />
            );
          })}
        </Carousel>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl">{brand}</h1>
          <h2 className="text-xl mt-2">{title}</h2>
          <Button
            className="bg-green-500 text-white p-5 rounded font-bold text-lg m-5"
            onClick={showModal}
          >
            Show Description
          </Button>
          <Modal
            title="Basic Modal"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <p>{description}</p>
          </Modal>
          <p className="flex items-center text-blue-500 font-semibold text-lg">
            <FaRupeeSign /> {Math.round(price * 80)}
          </p>
          <div className="bg-green-500 p-2 rounded mt-2">
            {str.repeat(rating)}
          </div>

          <button
            onClick={() =>
              handleAddToCart({
                title: title,
                price: price,
                image: thumbnail,
              })
            }
            className="bg-black text-white w-72 m-auto mt-2 text-xl text-center"
          >
            <BiCartAdd />
          </button>
        </div>
      </div>
      <SimilarProducts similarProducts={filteredProducts} />
    </>
  );
};

export default IndividualPage;
