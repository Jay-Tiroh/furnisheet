import React, { useState } from "react";
import arrow from "/assets/images/arrow-select.svg";
const AllFurniture = () => {
  const furnitures = [
    {
      name: "Ergonomic And Swivel Chairs(ESC)",
      stars: 4,
      installment: "N1,500/mo",
      price: "12,000 to buy",
      image: "swivel-chair",
    },
    {
      name: "Comfy Couch, Grey left extended",
      stars: 4,
      installment: "N1,500/mo",
      price: "12,000 to buy",
      image: "chair1",
    },
    {
      name: "Comfy Couch, Grey left extended",
      stars: 4,
      installment: "N1,500/mo",
      price: "12,000 to buy",
      image: "chair2",
    },
    {
      name: "Comfy Couch, Grey left extended",
      stars: 4,
      installment: "N1,500/mo",
      price: "12,000 to buy",
      image: "chair3",
    },
    {
      name: "Comfy Couch, Grey left extended",
      stars: 4,
      installment: "N1,500/mo",
      price: "12,000 to buy",
      image: "chair4",
    },
    {
      name: "Comfy Couch, Grey left extended",
      stars: 4,
      installment: "N1,500/mo",
      price: "12,000 to buy",
      image: "chair5",
    },
    {
      name: "Comfy Couch, Grey left extended",
      stars: 4,
      installment: "N1,500/mo",
      price: "12,000 to buy",
      image: "chair6",
    },
  ];

  const [selected, setSelected] = useState("Recommended");
  const [isVisible, setIsVisible] = useState(false);

  const toggleOptions = () => {
    setIsVisible(!isVisible);
  };

  const select = (e) => {
    const current = e.target;
    const options = document.querySelectorAll(".option");
    options.forEach((option) => {
      option.classList.remove("selected");
      if (option === current) {
        option.classList.add("selected");
        setSelected(option.textContent);
      }
    });
  };

  return (
    <div>
      <div className="flex flex-col p-10 gap-7 header w-full bg-light-grey">
        <h2 className=" font-semibold text-2xl">All Furniture</h2>
        <div className="ribbon flex justify-between items-center w-full pr-5">
          <span className="items text-xs font-medium  text-very-grey">
            257 items
          </span>

          <div className="flex relative">
            <div className="sort-btn flex items-center gap-2">
              <span className="text-xs font-medium text-very-grey">
                Sort by:
              </span>
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={toggleOptions}
              >
                <span className="font-semibold text-sm"> {selected}</span>
                <img src={arrow} alt="" />
              </div>
            </div>
            {isVisible && (
              <div className="sort-options flex flex-col  shadow-2xl rounded-lg absolute top-10 bg-white left-5 items-stretch overflow-hidden">
                <span
                  className="option selected"
                  onClick={(e) => {
                    select(e);
                  }}
                >
                  Recommended
                </span>
                <span
                  className="option"
                  onClick={(e) => {
                    select(e);
                  }}
                >
                  Best Selling
                </span>
                <span
                  className="option"
                  onClick={(e) => {
                    select(e);
                  }}
                >
                  Price: High to Low{" "}
                </span>
                <span
                  className="option"
                  onClick={(e) => {
                    select(e);
                  }}
                >
                  Price: Low to High
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 p-5 place-items-center py-10 items-start ">
        {furnitures.map((item, i) => (
          <div className="item  " key={i}>
            <img src={`/assets/images/${item.image}.png`} alt="" />
            <div className="text-sm mt-1 font-medium">{item.name}</div>
            <div className="stars">
              <span className="text-secondary">★ ★ ★ ★ ☆</span>
            </div>
            <div className="price text-sm">
              <span className="font-semibold subscription ">
                {item.installment}
              </span>
              &nbsp; {item.price}
            </div>
          </div>
        ))}

        {/* make a request */}
        <div className="flex flex-col bg-mid-grey items-center justify-center p-10 rounded-lg h-[17.5rem]">
          <span className="text text-center w-10/12">
            Can’t find what you are looking for?
          </span>
          <div className="btn flex items-center justify-center text-center tracking-wide  py-2 px-7 rounded-full  mt-3 lg:py-4 lg:px-10 cursor-pointer border-very-dark-blue border-2 text-very-dark-blue font-semibold hover:text-fake-black hover:border-fake-black">
            Make a Request
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllFurniture;
