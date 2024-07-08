import { useState } from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home/Home";
import Products from "./Components/Products/Products";
import AboutUs from "./Components/AboutUs";
import Cart from "./Components/Cart";
import IndividualPage from "./Components/Products/IndividualPage";
function App() {
  const appRoutes = createBrowserRouter([
    {
      element: <Navbar />,
      path: "/",
      children: [
        {
          element: <Home />,
          path: "/",
        },
        {
          element: <Products />,
          path: "/products",
        },
        {
          element: <IndividualPage />,
          path: "/prodInfo",
        },
        {
          element: <AboutUs />,
          path: "/about",
        },
        {
          element: <Cart />,
          path: "/cart",
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={appRoutes} />
    </>
  );
}

export default App;
