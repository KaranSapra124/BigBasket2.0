import React from "react";
import { Carousel } from "antd";
const Banner = () => {
  return (
    <Carousel autoplay>
      <div>
        <img className="h-[20rem] object-cover w-full " src="Iphone.jpg" />
      </div>
      <div>
        <img className="h-[20rem] object-cover w-full " src="Samsung.jpg" />
      </div>
    </Carousel>
  );
};

export default Banner;
