import React from "react";
import swivel from "/public/assets/images/swivel-chair.png?url";
import chair1 from "/public/assets/images/chair1.png?url";
import chair2 from "/public/assets/images/chair2.png?url";
import chair3 from "/public/assets/images/chair3.png?url";
const BestSelling = () => {
  return (
    <div className="p-10 space-y-10 ">
      <h2 className="font-semibold text-3xl text-center">
        Best Selling Products
      </h2>
      <div className="container m-auto  gap-10 mb-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-content-center place-items-center md:grid-flow-row ">
        {/* items */}
        <div className="item  ">
          <img src={swivel} alt="" />
          <div className="name mt-1">Ergonomic And Swivel Chairs (ESC)</div>
          <div className="price">
            <span className="font-semibold subscription">N1,500/mo</span> &nbsp;
            N12,000 to buy
          </div>
        </div>

        <div className="item ">
          <img src={chair1} alt="" />
          <div className="name mt-1">Comfy Couch, Grey Left Extended</div>
          <div className="price">
            <span className="font-semibold subscription">N1,500/mo</span> &nbsp;
            N12,000 to buy
          </div>
        </div>

        <div className="item ">
          <img src={chair2} alt="" />
          <div className="name mt-1">Comfy Couch, Grey Left Extended</div>
          <div className="price">
            <span className="font-semibold subscription">N1,500/mo</span> &nbsp;
            N12,000 to buy
          </div>
        </div>

        <div className="item">
          <img src={chair3} alt="" />
          <div className="name mt-1">Comfy Couch, Grey Left Extended</div>
          <div className="price">
            <span className="font-semibold subscription">N1,500/mo</span> &nbsp;
            N12,000 to buy
          </div>
        </div>
      </div>
      <div className="home-btn max-w-54 m-auto ">Shop All Furniture</div>
    </div>
  );
};

export default BestSelling;
