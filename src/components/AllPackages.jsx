import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

const AllPackages = () => {
  const packages = [
    {
      name: "3 - Bedroom Package",
      installment: "N1,500/mo",
      price: 15000,
      image: "swivel-chair",
    },
    {
      name: "3 - Bedroom Package",

      installment: "N1,500/mo",
      price: 13000,
      image: "chair1",
    },
    {
      name: "3 - Bedroom Package",

      installment: "N1,500/mo",
      price: 11000,
      image: "chair2",
    },
  ];
  const updateBreadcrumb = useOutletContext();
  const newBreadcrumb = [
    {
      name: "Home",
      link: "/",
      first: true,
    },
    {
      name: " > All Packages",
      link: "/all",
      first: false,
    },
  ];

  useEffect(() => {
    updateBreadcrumb(newBreadcrumb);
  }, []);
  return (
    <div>
      <div className="flex flex-col p-10 gap-7 header w-full bg-light-grey">
        <h2 className=" font-semibold text-2xl">All Packages</h2>
      </div>
      <div className="content grid w-full grid-cols-1  xl:grid-cols-2 gap-y-10 p-5 place-items-center py-10 items-start ">
        {packages.map((item, i) => (
          <div className="item  w-full" key={i}>
            <div
              className={`all-packages-img${i} overflow-hidden h-64 items-center justify-center flex w-[40rem] rounded-md m-auto`}
            ></div>
            <div className="flex justify-between items-center w-[40rem] m-auto">
              <div className="">
                <div className="text-sm mt-1 font-medium">{item.name}</div>
                <div className="price text-sm">
                  <span className="font-semibold subscription ">
                    {item.installment}
                  </span>
                  &nbsp; {`${item.price} to buy`}
                </div>
              </div>
              <div className="btn flex items-center justify-center text-center tracking-wide  py-2 px-7 rounded-full  mt-3 lg:py-3 lg:px-10 cursor-pointer border-very-dark-blue border-2 text-very-dark-blue font-semibold hover:text-fake-black hover:border-fake-black">
                Shop Now
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPackages;
