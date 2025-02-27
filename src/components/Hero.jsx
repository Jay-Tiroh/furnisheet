import React from "react";
import heroImg from "/public/assets/images/hero-img.png?url";
import helpBtn from "/public/assets/images/need-help.png?url";
const Hero = () => {
  return (
    <div>
      <div
        className="content flex flex-col items-center
      md:items-start md:justify-center md:flex-row-reverse  "
      >
        <div className="md:w-8/12 xl:w-10/12 relative">
          <img src={heroImg} alt="" />
          <img src={helpBtn} alt="" className="absolute bottom-10 right-10" />
        </div>
        <div className="hero-details flex flex-col items-center md:items-start md:w-2/5 px-7 md:space-y-5 md:mt-10 lg:mt-20">
          <div className="hero-text text-3xl  flex gap-5 justify-center mt-3 md:flex-col md:items-start md:text-5xl lg:text-7xl">
            <span>Rent,</span> <span>Furnish,</span> <span>Live.</span>
          </div>
          <div className="home-btn ">Explore Furniture</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
