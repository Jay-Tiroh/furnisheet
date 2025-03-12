import React from "react";
import { Link } from "react-router-dom";

const NavigationTab = ({ breadcrumb }) => {
  console.log(breadcrumb);
  // return <div className="">Hello </div>;

  return (
    <div className="p-3 border-b-2 border-t font-medium border-y-mid-grey text-xs px-10 tracking-[.25rem] lg:px-20">
      {breadcrumb.map((directory, i) => (
        // {"&gt;"}
        <Link to={directory.link} className="breadcrumb-link ">
          {directory.name}
        </Link>
      ))}
    </div>
  );
};

export default NavigationTab;
