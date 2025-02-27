import React from "react";
import { Link } from "react-router-dom";

const SubMenu = ({
  sub = "categories",
  SubMenuOpen,
  setSubMenuOpen,
  setNavMenuOpen,
}) => {
  return (
    <div className={` w-full `}>
      <div className="mb-5 w-full  bg-mid-grey p-3 rounded-md my-2  flex justify-center items-center px-10">
        <span
          className="rotate-180 cursor-pointer hover:fill-secondary transition-colors ease-in-out duration-200"
          onClick={() => {
            setSubMenuOpen(false);
            setNavMenuOpen(true);
          }}
        >
          <svg
            className="size-4 fill-inherit"
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5 0L4.11875 0.88125L7.60625 4.375H0V5.625H7.60625L4.11875 9.11875L5 10L10 5L5 0Z" />
          </svg>
        </span>
        <span className="text text-center w-full m-auto uppercase font-semibold">
          {sub}
        </span>
        <span className="border-b-3 border-secondary  text-secondary text-nowrap text-xs cursor-pointer">
          {sub === "categories" ? "See All" : "Shop All"}
        </span>
      </div>
      <div className=" w-full  bg-mid-grey p-3 px-10 rounded-md my-2 text-sm">
        <Link to="">
          {sub === "categories" ? "Couch" : "Self Contained Room"}
        </Link>
      </div>
      <div className=" w-full  bg-mid-grey p-3 px-10 rounded-md my-2 text-sm">
        <Link to="">
          {sub === "categories" ? "Sofa" : "Two - Bedroom Flat"}
        </Link>
      </div>
      <div className=" w-full  bg-mid-grey p-3 rounded-md px-10 my-2 text-sm">
        <Link to="">
          {sub === "categories" ? "Chair" : "Three - Bedroom Flat"}
        </Link>
      </div>
      {sub === "categories" && (
        <div className=" w-full  bg-mid-grey p-3 rounded-md px-10 my-2 text-sm">
          Side Mirror
        </div>
      )}
    </div>
  );
};

export default SubMenu;
