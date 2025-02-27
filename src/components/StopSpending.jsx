import React from "react";
import img from "/public/assets/images/stop-spending-img-1.png?url";

const StopSpending = () => {
  return (
    <div className="bg-very-dark-blue text-light-grey pb-10 md:p-10 md:relative min-h-[22rem]">
      <div className="content flex-col md:flex-row md:items-stretch  justify-center md:absolute left-20 -bottom-10 flex">
        <div className="spending-img  min-h-80 overflow-hidden w-full md:w-80 md:max-w-[25rem]">
          h
        </div>
        <div className="text-content mx-10 md:w-1/3  left-6/11 xl:left-4/9 mt-10 md:mt-0 bottom-5 flex flex-col md:justify-center">
          <h2 className="text-2xl font-medium mb-3 leading-[1.8rem] text-wrap text-center md:text-left">
            Stop spending a fortune upfront
          </h2>
          <p className="text-sm text-center md:text-left ">
            It costs $6,000 on average to furnish a one-bedroom with quality
            furniture. With Furnisheet, you can rent items starting at
            N1,200/mo, and our team handles everything you’d rather not:
            delivery, assembly, & pickup.
          </p>
          <div className="home-btn max-w-52 m-auto md:m-0 md:mb-10 xl:m-0">
            See All Furniture
          </div>
        </div>
      </div>
    </div>
  );
};

export default StopSpending;
