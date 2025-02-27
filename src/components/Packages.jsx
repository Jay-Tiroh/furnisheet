import React from "react";
import twoBedroom from "/public/assets/images/2-bedroom.png?url";
import threeBedroom from "/public/assets/images/3-bedroom.png?url";
import selfCon from "/public/assets/images/self-con.png?url";
const Packages = () => {
  return (
    <div className="packages-section flex flex-col items-center justify-center ">
      <h2 className="text-3xl font-semibold text-center">Our Packages</h2>
      <div className="packages w-full ">
        <div className="container w-full p-5 text-center flex justify-evenly gap-5 m-auto flex-wrap md:flex-nowrap">
          {/* packages */}
          <div className="package flex flex-col justify-center ">
            <img src={twoBedroom} alt="" className="package-img" />
            <span className="package-name font-semibold text-xl mt-2">
              2 - Bedroom Package
            </span>
          </div>
          <div className="package flex flex-col justify-center ">
            <img src={threeBedroom} alt="" className="package-img" />
            <span className="package-name font-semibold text-xl mt-2">
              3 - Bedroom Package
            </span>
          </div>
          <div className="package flex flex-col justify-center ">
            <img src={selfCon} alt="" className="package-img" />
            <span className="package-name font-semibold text-xl mt-2">
              Self - Contain Package
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
