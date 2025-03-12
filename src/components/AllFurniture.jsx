import React, { useContext, useEffect, useState } from "react";
import arrow from "/assets/images/arrow-select.svg";
import { Navigate, useNavigate, useOutletContext } from "react-router-dom";
const AllFurniture = ({}) => {
  const furnitures = [
    {
      name: "Ergonomic And Swivel Chairs(ESC)",
      stars: 4,
      installment: "N1,500/mo",
      price: 15000,
      image: "swivel-chair",
      category: ["Recommended"],
    },
    {
      name: "Comfy Couch, Grey left extended",
      stars: 4,
      installment: "N1,500/mo",
      price: 13000,
      image: "chair1",
      category: ["Best Selling"],
    },
    {
      name: "Comfy Couch, Grey left extended",
      stars: 4,
      installment: "N1,500/mo",
      price: 11000,
      image: "chair2",
      category: ["Best Selling"],
    },
    {
      name: "Comfy Couch, Grey left extended",
      stars: 4,
      installment: "N1,500/mo",
      price: 25000,
      image: "chair3",
      category: ["Best Selling", "Recommended"],
    },
    {
      name: "Comfy Couch, Grey left extended",
      stars: 4,
      installment: "N1,500/mo",
      price: 15000,
      image: "chair4",
      category: ["Recommended"],
    },
    {
      name: "Comfy Couch, Grey left extended",
      stars: 4,
      installment: "N1,500/mo",
      price: 20000,
      image: "chair5",
      category: [],
    },
    {
      name: "Comfy Couch, Grey left extended",
      stars: 4,
      installment: "N1,500/mo",
      price: 17000,
      image: "chair6",
      category: [],
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
      name: " > All Furniture",
      link: "/all",
      first: false,
    },
  ];

  useEffect(() => {
    updateBreadcrumb(newBreadcrumb);
  }, []);

  const [selected, setSelected] = useState("All");
  const [isVisible, setIsVisible] = useState(false);
  const [sorted, setSorted] = useState(furnitures);
  const toggleOptions = () => {
    setIsVisible(!isVisible);
  };

  const sortFurniture = (option) => {
    if (option === "All") return setSorted(furnitures);
    else if (option === "Best Selling" || option === "Recommended") {
      setSorted(
        furnitures.filter((item) => {
          if (option === "Recommended") {
            return item.category.includes("Recommended");
          } else if (option === "Best Selling") {
            return item.category.includes("Best Selling");
          }
        })
      );
    } else if (option === "Price: Low to High") {
      const sortedlist = [...furnitures];
      sortedlist.sort((a, b) => a.price - b.price);
      setSorted(sortedlist);
    } else {
      const sortedlist = [...furnitures];
      sortedlist.sort((a, b) => a.price - b.price);
      setSorted(sortedlist.reverse());
    }
  };

  const navigate = useNavigate();

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

    sortFurniture(current.textContent);
    console.log(current.textContent);
  };

  return (
    <div>
      <div className="flex flex-col p-10 gap-7 header w-full bg-light-grey">
        <h2 className=" font-semibold text-2xl">All Furniture</h2>
        <div className="ribbon flex justify-between items-center w-full pr-10">
          <span className="items text-xs font-medium  text-very-grey">
            257 items
          </span>

          <div className="flex relative">
            <div className="sort-btn flex items-center gap-2 w-72 justify-end">
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
              <div className="sort-options flex flex-col  shadow-2xl rounded-lg absolute top-10 bg-white right-0 items-stretch overflow-hidden">
                <span
                  className="option selected"
                  onClick={(e) => {
                    select(e);
                  }}
                >
                  All
                </span>
                <span
                  className="option "
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
                  Price: High to Low
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
        {sorted.map((item, i) => (
          <div className="item  " key={i}>
            <img
              src={`/assets/images/${item.image}.png`}
              alt=""
              className="hover:cursor-pointer"
              onClick={() => {
                navigate("/all/chairs");
              }}
            />
            <div className="text-sm mt-1 font-medium">{item.name}</div>
            <div className="stars">
              <span className="text-secondary">★ ★ ★ ★ ☆</span>
            </div>
            <div className="price text-sm">
              <span className="font-semibold subscription ">
                {item.installment}
              </span>
              &nbsp; {`${item.price} to buy`}
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
