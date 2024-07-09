import { Carousel } from "antd";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Button, Modal } from "antd";
import { FaRupeeSign } from "react-icons/fa";

const IndividualPage = () => {
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
  const { title, brand, images, description, price, rating } = state;
  const str = "⭐";
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
          <Button className="bg-green-500 text-white p-5 rounded font-bold text-lg m-5" onClick={showModal}>
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
          <div className="bg-green-500 p-2 rounded mt-2">{str.repeat(rating)}</div>
        </div>
      </div>
    </>
  );
};

export default IndividualPage;
