import React, { useState } from "react";
import NavigationTab from "../components/NavigationTab";
import AllFurniture from "../components/AllFurniture";
import AllPackages from "../components/AllPackages";
import { Outlet, useOutletContext } from "react-router-dom";

const All = () => {
  const [breadcrumb, setBreadcrumb] = useState([
    {
      name: "Home",
      link: "/",
      first: true,
    },
  ]);
  const updateBreadcrumb = (state) => {
    setBreadcrumb(state);
  };
  return (
    <div className="">
      <NavigationTab breadcrumb={breadcrumb} />
      <Outlet context={updateBreadcrumb} />
    </div>
  );
};

export default All;
