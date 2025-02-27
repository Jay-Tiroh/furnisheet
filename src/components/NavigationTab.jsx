import React from "react";
import { Link } from "react-router-dom";

const NavigationTab = () => {
  return (
    <div className="p-3 border-b-2 border-t font-medium border-y-mid-grey text-xs px-10 tracking-[.25rem] lg:px-20">
      <Link to="/" className="breadcrumb-link ">
        Home{" "}
      </Link>
      &gt; <span className="breadcrumb-link">All Furniture</span>
    </div>
  );
};

export default NavigationTab;
