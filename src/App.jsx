import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import All from "./pages/All";
import AllFurniture from "./components/AllFurniture";
import AllPackages from "./components/AllPackages";
import Chairs from "./components/Chairs";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "all",
          element: <All />,
          children: [
            {
              path: "",
              element: <AllFurniture />,
            },
            { path: "packages", element: <AllPackages /> },
            { path: "chairs", element: <Chairs /> },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
